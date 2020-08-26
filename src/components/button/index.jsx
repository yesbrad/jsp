import React from 'react';
import './styles.scss';

const Button = ({ title, onClick }) => {
	return ( 
		<div className="button-container">
			<button onClick={(e) => onclick(e)}>
				{title}
			</button>
		</div>
	);
}
 
export default Button;