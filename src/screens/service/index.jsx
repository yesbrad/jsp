import React from 'react';
import './styles.scss';
import Navigation from '../../components/navigation';

const Service = ({ service }) => {
	return (  
		<div className="service-container">
			<Navigation />
			<h2>
				{service}
			</h2>
		</div>
	);
}
 
export default Service;