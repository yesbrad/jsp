import React from 'react';
import './styles.scss';
import Button from '../button';

const Header = () => {
	return ( 
		<div className="header-container">
			<div className="cta-container">
				<div className="header-col">
					<h1>South East Suburb Plumbers</h1>
					<Button title="Services" />
				</div>
				<div className="header-col">
					<h2>0418 527 194</h2>
				</div>
			</div>
		</div>
	 );
}
 
export default Header;