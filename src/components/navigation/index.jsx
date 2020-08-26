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
					<li><Link to="/">Home</Link></li>
					<li><Link to="/service/yeet">Services</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>
			</nav>
		</div>
	 );
}
 
export default Navigation;