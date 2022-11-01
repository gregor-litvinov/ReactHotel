import React from 'react';
import cl from 'MyModal.module.css'


const MyModal = ({children}) => {
	return (
		<div className={[cl.MyModal, cl.active].join(' ')}>
			<div className={cl.myModalContent}></div>
			{children}
			
		</div>
	);
};

export default MyModal;