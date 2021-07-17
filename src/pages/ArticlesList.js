import React from 'react';
import { Link } from 'react-router-dom';
import articles from './article-content';

const ArticlesList = () => {
	return (
		<>
			<h1>Articles</h1>
			<ul className='ul-articles-long'>
				{articles.map((article, key) => (
					<li key={key}>
						<Link to={`/article/${article.name}`}>
							<h3>{article.title}</h3>
							<p>{`${article.content[0].substring(0, 150)}...`}</p>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
};

export default ArticlesList;
