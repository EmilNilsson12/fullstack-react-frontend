import React from 'react';
import ArticlesList from '../components/ArticlesList';

const ArticlesListPage = () => {
	return (
		<>
			<h1>Articles</h1>

			<ul className='ul-articles-long'>
				<ArticlesList />
			</ul>
		</>
	);
};

export default ArticlesListPage;
