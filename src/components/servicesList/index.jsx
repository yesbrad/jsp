import React from 'react';
import './styles.scss';
import data from '../../data/services';
import {
  Link
} from "react-router-dom";

const ServicesList = () => {

	const renderService = (service) => (
		<div className="service-card">
			<div key={service.name} style={{backgroundImage: `url(${service.imageURI})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="service-card-container">
				<Link to={`/service/${service.url}`} className="service-cta-card">
					<div className="service-cta-col">
						<h4>{service.name}</h4>
						<p>{service.miniDescription}</p>
					</div>
					<div className="service-cta-col">
						{'>'}
					</div>
				</Link>
			</div>
		</div>
	)

	return ( 
		<div className="servicesList-container">
			{data.map((serv) => renderService(serv))}
		</div>
	 );
}
 
export default ServicesList;