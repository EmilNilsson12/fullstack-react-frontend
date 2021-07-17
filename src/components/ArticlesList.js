import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/article-content';

const ArticlesList = () => {
	return (
		<>
			{articles.map((article, key) => (
				<li key={key}>
					<Link to={`/article/${article.name}`}>
						<h3>{article.title}</h3>
						<p>{`${article.content[0].substring(0, 150)}...`}</p>
					</Link>
				</li>
			))}
		</>
	);
};

export default ArticlesList;
