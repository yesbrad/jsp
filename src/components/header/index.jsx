import React from 'react';
import './styles.scss';
import Button from '../button';
import { AiFillPhone } from 'react-icons/ai';
import { scroller } from 'react-scroll';

const Header = () => {
	const onClickService = () => {
		scroller.scrollTo('services', {
			duration: 800,
			delay: 0,
			offset: -200,
			smooth: 'easeInOutQuart'
		})
	}

	return ( 
		<div className="header-container">
			<div className="cta-container">
				<div className="header-col-cta">
					<h1>Servicing Melbourne's South Eastern Suburbs</h1>
					<Button title="Services" onClick={onClickService}/>
				</div>
				<div className="header-col-phone">
					<AiFillPhone style={{width: '3rem', height: '3rem'}}/>
					<a href="tel:0418527194">0418 527 194</a>
				</div>
			</div>
		</div>
	 );
}
 
export default Header;