import React from 'react';
import classes from './MyBtnModule.css'

const MyButton = (props) => {
	return (
		<button className={classes.myBtn}>
			{props.children}
		</button>
	);
};

export default MyButton;