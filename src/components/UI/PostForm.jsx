import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const PostForm = (props) => {
	const [postName, setPostName,] = useState('')
	const [postText, setPostText] = useState('')
	const addNewPost = (e) => {
		e.preventDefault()
		props.create({id: Date.now(), title: postName, body: postText })
		setPostName('')
		setPostText('')
	}
	
	return (
		<form>
			
			<MyInput
				value={postName}
				onChange={(e) => {
					setPostName(e.target.value)
				}}
				type="text"
				placeholder='Название поста'/>
			<MyInput
				value={postText}
				onChange={(e) => {
					setPostText(e.target.value)
				}}
				type="text"
				placeholder='Описание поста'/>
			<MyButton onClick={addNewPost}>Создать Пост</MyButton>

		</form>
	);
};

export default PostForm;