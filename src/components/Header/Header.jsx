import React,{useState} from 'react';

const Header = function() {
	const [count, setCount] = useState(0)
	
	function incrimentf() {
		setCount(count + 1)
		
	}
	function decrimentf() {
		setCount(count - 1)
	}
	return (
		<div>
			<h1>{count}</h1>
			<button onClick={incrimentf}>Incriment</button>
			<button onClick={decrimentf}>Decriment</button>
		</div>
	);
};

export default Header;