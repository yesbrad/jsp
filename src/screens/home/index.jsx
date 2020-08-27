import React from 'react';
import './styles.scss';
import Navigation from '../../components/navigation';
import Header from '../../components/header';
import Heading from '../../components/heading';
import ServicesList from '../../components/servicesList';
import Footer from '../../components/footer';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

const Home = ({ goToService }) => {
	useEffect(() => {
		if (goToService === true) {
			scroller.scrollTo('services', {
				duration: 800,
				delay: 0,
				smooth: 'easeInOutQuart'
			})
		}

		if (goToService === false) {
			scroller.scrollTo('home', {
				duration: 800,
				delay: 0,
				smooth: 'easeInOutQuart'
			})
		}
	}, [goToService])
	
	return (  
		<div className="home-container">
			<Navigation />
			<Header />
			<Heading title="Services" />
			<ServicesList />
			<Footer />
		</div>
	);
}
 
export default Home;