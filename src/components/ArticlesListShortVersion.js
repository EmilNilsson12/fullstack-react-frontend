import React from 'react';
import { Link } from 'react-router-dom';
import articles from '../data/article-content';

const ArticlesListShortVersion = () => {
	return (
		<>
			<h1>
				<Link to='/articles-list'>Show all articles</Link>
			</h1>
			<ul className='ul-articles-short'>
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

export default ArticlesListShortVersion;
