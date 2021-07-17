import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from '../data/article-content';

const ArticlesListPage = () => {
	return (
		<>
			<h1>Articles</h1>
			<ul className='ul-articles-long'>
				<ArticlesList articles={articleContent} />
			</ul>
		</>
	);
};

export default ArticlesListPage;
