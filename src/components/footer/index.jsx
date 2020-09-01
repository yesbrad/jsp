import React from 'react';
import './styles.scss';
import { Link } from "react-router-dom";

const Footer = () => {
	return ( 
		<div className="footer-container">
			<ul>
					<li><Link className="footer-link" to="/">Home</Link></li>
					<li><Link className="footer-link" to="/services">Services</Link></li>
					<li><Link className="footer-link" to="/about-us">About</Link></li>
					<li><Link className="footer-link" to="/contact">Contact</Link></li>
			</ul>
			<span>ABN: 21 613 041 405</span>
			<span>Licence No. 25728</span>
			<span>© Copyright 2020 John Simpson Plumbing. All Rights Reserved.</span>
		</div>
	);
}
 
export default Footer;