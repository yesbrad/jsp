import React from 'react';
import './styles.scss';
import { Link } from "react-router-dom";

const Navigation = () => {
	return ( 
		<div className="navigation-container">
			<nav>
				<div className="nav-logo">
					
				</div>
				<ul>
					<li><Link className="nav-link" to="/">Home</Link></li>
					<li><Link className="nav-link" to="/services">Services</Link></li>
					<li><Link className="nav-link" to="/about-us">About</Link></li>
					<li><Link className="nav-link" id="nav-link-highlight" to="/contact">Contact</Link></li>
				</ul>
			</nav>
		</div>
	 );
}
 
export default Navigation;