import React from 'react';
import './styles.scss';

const Button = ({ title, onClick }) => {
	return ( 
		<div className="button-container">
			<button onClick={(e) => onClick(e)}>
				{title}
			</button>
		</div>
	);
}
 
export default Button;