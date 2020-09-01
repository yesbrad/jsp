import React from 'react';
import './styles.scss';
import Navigation from '../../components/navigation';
import data from '../../data/services';
import Button from '../../components/button';
import Footer from '../../components/footer';
import { withRouter } from 'react-router-dom'
import { useEffect } from 'react';
import { scroller, Element } from 'react-scroll';

const Service = ({ service, history }) => {
	useEffect(() => {
		scroller.scrollTo('topServ', {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart'
		});
	}, []);

	const currentData = data.find(ele => ele.url === service);

	if (currentData === undefined)
		return <h5>Broken Should have never got here!</h5>

	
	return (  
		<div className="service-container">
			<Element name="topServ">	
				<Navigation />
			</Element>
			<h2>
			<div className="service-page-info">
				<div className="service-page-col">
						{currentData.imageURI.map(((dat) =>	<div style={{backgroundImage: `url(${dat})`, backgroundPosition: 'center', backgroundSize: 'cover'}} className="service-page-image" />))}
				</div>
				<div className="service-page-col">
					<h1>{currentData.name}</h1>
					<p>{currentData.content}</p>
						<div className="services-page-contact">
							<div className="services-button-container">
								<Button title="Contact" onClick={() => history.push("/contact")} />
							</div>
						<h4>or CALL on 0418 527 194</h4>
					</div>
					</div>
				</div>
			</h2>
			<Footer />
		</div>
	);
}
 
export default withRouter(Service);