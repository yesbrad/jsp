import React from 'react';
import './styles.scss';
import {
  Link
} from "react-router-dom";

const Navigation = () => {
	return ( 
		<div className="navigation-container">
			<nav>
				<h1>JSP</h1>
				<ul>
					<Link to="/">Home</Link>
					<Link to="/service">Service</Link>
				</ul>
			</nav>
		</div>
	 );
}
 
export default Navigation;