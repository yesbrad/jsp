import React from 'react';
import './styles.scss';

const Heading = ({ title }) => {
	return ( 
		<div className="heading-container">
			<h3>{title}</h3>
		</div>
	);
}
 
export default Heading;