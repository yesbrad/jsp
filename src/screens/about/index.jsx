import React from 'react';
import './styles.scss';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';

const About = () => {
	return (  
		<div className="about-container">
			<Navigation />
			<div className="about-wrapper">
				<div className="about-info">
					<h1>About Us</h1>
					<p>John Simpson Plumbing (trading as J.J Simpson Plumbing Pty Ltd ) started in 1986 and quickly become entrusted within the community as a reputable and trusted business for it’s professional approach and level of service to their clients. As a sole proprietor, we listen to your concerns, and offer solutions that cater for your budget. With our home office based in Rowville, we tend to all enquiries in Melbourne’s South Eastern suburbs. When you call us, you will be talking to the plumber who does the work – myself or my son, so you can be assured of the personal service that you should receive.</p>
				</div>
				<div className="about-image-container">
					<div className="about-image"></div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
 
export default About;