import React from 'react';
import { Link } from 'react-router-dom';
import articles from './article-content';

const ArticlesList = () => {
	return (
		<>
			<h1>
				<Link to='/articles-list'>Show all articles</Link>
			</h1>
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
