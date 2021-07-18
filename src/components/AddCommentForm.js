import React, { useState } from 'react';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
	const [userName, setUserName] = useState('');
	const [commentText, setCommentText] = useState('');

	const addComment = async () => {
		const result = await fetch(
			`http://localhost:8000/api/articles/${articleName}/add-comment`,
			{
				method: 'POST',
				body: JSON.stringify({ userName, text: commentText }),
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const body = await result.json();
		setArticleInfo(body);
		setUserName('');
		setCommentText('');
	};

	return (
		<div>
			<h3>Add a commment</h3>
			<label>
				Name:
				<input
					type='text'
					value={userName}
					onChange={(evt) => setUserName(evt.target.value)}
				/>
			</label>
			<label>
				Comment:
				<textarea
					rows='4'
					cols='50'
					value={commentText}
					onChange={(evt) => setCommentText(evt.target.value)}
				/>
			</label>

			<button onClick={() => addComment()}>Add comment</button>
		</div>
	);
};
export default AddCommentForm;
