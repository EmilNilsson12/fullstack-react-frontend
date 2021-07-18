import React from 'react';

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
	const upvoteArticle = async () => {
		const result = await fetch(
			`http://localhost:8000/api/articles/${articleName}/upvote`,
			{
				method: 'POST',
			}
		);
		const body = await result.json();
		setArticleInfo(body);
	};

	return (
		<div id='upvotes-section'>
			<p>This post has been upvoted {upvotes} times</p>
			<button onClick={upvoteArticle}>Add upvote</button>
		</div>
	);
};
export default UpvotesSection;
