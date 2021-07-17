import React from 'react';
import { Link } from 'react-router-dom';
import articles from './article-content';

const ArticlesList = () => {
	return (
		<>
			<h2>
				<Link to='/articles-list'>All articles</Link>
			</h2>
			<ul>
				{articles.map((article, key) => (
					<li key={key}>
						<Link to={`/article/${article.name}`}>
							<h3>{article.title}</h3>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default ArticlesList;
