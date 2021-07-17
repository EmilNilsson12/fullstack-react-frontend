import React from 'react';
import ArticlesListShortVersion from '../components/ArticlesListShortVersion';
import articleContent from '../data/article-content';

const ArticlePage = ({ match }) => {
	const name = match.params.name;
	const article = articleContent.find((article) => article.name === name);

	if (!article) return <h1>Article does not exist</h1>;
	return (
		<>
			<ArticlesListShortVersion />
			<h1>{article.name}</h1>
			{article.content.map((paragraph, key) => (
				<p key={key}>{paragraph}</p>
			))}
		</>
	);
};

export default ArticlePage;
