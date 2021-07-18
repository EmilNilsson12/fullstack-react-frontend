import React, { useState, useEffect } from 'react';
import articleContent from '../data/article-content';
import ArticlesList from '../components/ArticlesList';
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
	window.scrollTo({ top: 0, behavior: 'smooth' });
	return (
		<>
			<h1>{article.title}</h1>
			<p>This post has been upvoted {articleInfo.upvotes} times</p>
			{article.content.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))}
			<h2>Other interesting articles</h2>
			<ArticlesList articles={otherArticles} shortVersion={true} />
		</>
	);
};

export default ArticlePage;
