import React, { useState, useEffect } from 'react';
import articleContent from '../data/article-content';
import ArticlesList from '../components/ArticlesList';
import CommentsList from '../components/CommentsList';
import UpvotesSection from '../components/UpvotesSection';

import NotFoundPage from './NotFoundPage';

const ArticlePage = (props) => {
	const name = props.match.params.name;
	const article = articleContent.find((article) => article.name === name);

	const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
	useEffect(() => {
		const fetchData = async () => {
			const result = await fetch(`http://localhost:8000/api/articles/${name}`);
			const body = await result.json();
			setArticleInfo(body);
			window.scrollTo(0, 0);
		};
		fetchData();
	}, [name]);

	if (!article)
		return (
			<>
				<NotFoundPage />
				<h3>Please read one of our existing articles:</h3>
				<ArticlesList articles={articleContent} shortVersion={true} />
			</>
		);

	const otherArticles = articleContent.filter(
		(article) => article.name !== name
	);
	return (
		<>
			<h1>{article.title}</h1>
			<UpvotesSection
				articleName={name}
				upvotes={articleInfo.upvotes}
				setArticleInfo={setArticleInfo}
			/>
			{article.content.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))}
			<CommentsList comments={articleInfo.comments} />
			<h2>Other interesting articles</h2>
			<ArticlesList articles={otherArticles} shortVersion={true} />
		</>
	);
};

export default ArticlePage;
