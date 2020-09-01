import React from 'react';
import './styles.scss';
import data from '../../data/services';
import {
  Link
} from "react-router-dom";
import { FaChevronRight } from 'react-icons/fa';
import { Element } from 'react-scroll';

const ServicesList = () => {

	const renderService = (service) => (
		<div className="service-card">
			<div key={service.name} style={{backgroundImage: `url(${service.imageURI[0]})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="service-card-container">
				<Link to={`/service/${service.url}`} className="service-cta-card">
					<div className="service-cta-col">
						<h4>{service.name}</h4>
						<p>{service.miniDescription}</p>
					</div>
					<div className="service-cta-col" id="service-chev">
						<FaChevronRight style={{width: '100%', height: '100%'}}/>
					</div>
				</Link>
			</div>
		</div>
	)

	return ( 
		<Element name="services" className="servicesList-container">
			{data.map((serv) => renderService(serv))}
		</Element>
	 );
}
 
export default ServicesList;