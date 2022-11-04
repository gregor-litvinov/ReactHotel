import React from 'react';
import cl from '../myModal/MyModal.module.css'


const MyModal = ({children, isActive}) => {
	const activeClass = isActive ? 'active' : ''
	console.log(activeClass)
	return (
		<div className={`MyModal ${activeClass}`}>
			<div className={cl.myModalContent}>
				{children}
				
			</div>
		</div>
	);
};

export default MyModal;