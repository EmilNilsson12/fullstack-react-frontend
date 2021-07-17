import React from 'react';
import articleContent from '../data/article-content';
import ArticlesList from '../components/ArticlesList';

const ArticlePage = (props) => {
	const name = props.match.params.name;
	const article = articleContent.find((article) => article.name === name);

	if (!article) return <h1>Article does not exist</h1>;

	const otherArticles = articleContent.filter(
		(article) => article.name !== name
	);
	window.scrollTo(0, 0);
	return (
		<>
			<h1>{article.name}</h1>
			{article.content.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))}
			<h2>Other interesting articles</h2>
			<ArticlesList articles={otherArticles} shortVersion={true} />
		</>
	);
};

export default ArticlePage;
