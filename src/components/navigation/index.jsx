import React from 'react';
import './styles.scss';
import { Link } from "react-router-dom";
import { BiMenuAltRight } from 'react-icons/bi';
import { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const spring = useSpring({
		height: isOpen ? '20rem' : '0rem',
	})

	return ( 
		<div className="navigation-container">
			<nav>
				<div className="nav-logo">
					<h4>Quality Plumbing at Affordable Prices</h4>
				</div>
				<ul>
					<li><Link className="nav-link" to="/">Home</Link></li>
					<li><Link className="nav-link" to="/services">Services</Link></li>
					<li><Link className="nav-link" to="/about-us">About</Link></li>
					<li><Link className="nav-link" id="nav-link-highlight" to="/contact">Contact</Link></li>
				</ul>
				<button onClick={() => setIsOpen(!isOpen)} className="navigation-hamburger">
					<BiMenuAltRight style={{width: '3rem', height: '3rem'}} />
				</button>
			</nav>
				<animated.div style={spring} className="navigation-hamburger-menu">
					<ul>
						<li><a className="nav-link" href="/">Home</a></li>
						<li><a className="nav-link" href="/services">Services</a></li>
						<li><a className="nav-link" href="/about-us">About</a></li>
						<li><a className="nav-link" href="/contact" id="nav-link-highlight">Contact</a></li>
					</ul>
				</animated.div>
		</div>
	 );
}
 
export default Navigation;