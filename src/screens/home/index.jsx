import React from 'react';
import './styles.scss';
import Navigation from '../../components/navigation';
import Header from '../../components/header';
import Heading from '../../components/heading';
import ServicesList from '../../components/servicesList';
import Footer from '../../components/footer';

const Home = () => {
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