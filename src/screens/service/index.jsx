import React from 'react';
import './styles.scss';
import Navigation from '../../components/navigation';
import data from '../../data/services';
import Button from '../../components/button';

const Service = ({ service }) => {
	const currentData = data.find(ele => ele.url === service);

	if (currentData === null)
		return <h5>Broken Should have never got here!</h5>

	return (  
		<div className="service-container">
			<Navigation />
			<h2>
			<div className="service-page-info">
				<div className="service-page-col">
					<div style={{backgroundImage: `url(${currentData.imageURI})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="service-page-image" />
				</div>
				<div className="service-page-col">
					<h1>{currentData.name}</h1>
					<p>{currentData.content}</p>
						<div className="services-page-contact">
							<div className="services-button-container">
								<Button title="Contact" />
							</div>
						<h4>or CALL on 0418 527 194</h4>
					</div>
					</div>
				</div>
			</h2>
		</div>
	);
}
 
export default Service;