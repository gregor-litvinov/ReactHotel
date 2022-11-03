import React from 'react';
import cl from '../myModal/MyModal.module.css'


const MyModal = ({children, isActive}) => {
	const activeClass = isActive ? cl.active : cl.myModal
	console.log(cl)
	return (
		<div className={activeClass}>
			<div className={cl.myModalContent}>
				{children}
				
			</div>
		</div>
	);
};

export default MyModal;