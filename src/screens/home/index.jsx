import React from 'react';
import './styles.scss';
import Navigation from '../../components/navigation';
import Header from '../../components/header';
import Heading from '../../components/heading';
import ServicesList from '../../components/servicesList';

const Home = () => {
	return (  
		<div className="home-container">
			<Navigation />
			<Header />
			<Heading title="Services" />
			<ServicesList />
		</div>
	);
}
 
export default Home;