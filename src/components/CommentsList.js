import React from 'react';

const CommentsList = ({ comments }) => (
	<>
		<h3>Comments:</h3>
		{[...comments].reverse().map((comment, key) => (
			<div key={key}>
				<h4>{comment.userName}</h4>
				<p>{comment.text}</p>
			</div>
		))}
	</>
);

export default CommentsList;
