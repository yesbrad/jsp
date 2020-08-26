import React from 'react';
import './styles.scss';
import { Link } from "react-router-dom";

const Footer = () => {
	return ( 
		<div className="footer-container">
			<ul>
					<li><Link className="footer-link" to="/">Home</Link></li>
					<li><Link className="footer-link" to="/service/yeet">Services</Link></li>
					<li><Link className="footer-link" to="/about">About</Link></li>
					<li><Link className="footer-link" to="/contact">Contact</Link></li>
			</ul>
			<span>Copyright John Simpson Plumbing ABN: 696 9696 969</span>
		</div>
	);
}
 
export default Footer;