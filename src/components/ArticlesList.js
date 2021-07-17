import React from 'react';
import { Link } from 'react-router-dom';

const ArticlesList = (props) => {
	return (
		<ul className='ul-articles'>
			{props.articles.map((article, key) => (
				<li key={key}>
					<Link to={`/article/${article.name}`}>
						<h3>{article.title}</h3>
						{!props.shortVersion ? (
							<p>{`${article.content[0].substring(0, 150)}...`}</p>
						) : (
							<></>
						)}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default ArticlesList;
