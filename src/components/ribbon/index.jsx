import React from 'react';
import './styles.scss';
import { FaFacebook } from 'react-icons/fa';

const Ribbon = () => {
	return ( 
		<div className="ribbon-container">
			<div className="ribbon-fixed-container">
				<div className="ribbon-socials">
					<FaFacebook style={{width: '2rem', height:'2rem'}}/>
					<a href="https://www.facebook.com/John-Simpson-Plumbing-106764647808713">Follow US on Facebook!</a>
				</div>
				<h4>CALL US: 0418 527 194</h4>
			</div>
		</div>
	);
}
 
export default Ribbon;