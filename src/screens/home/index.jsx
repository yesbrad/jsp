import React from 'react';
import './styles.scss';
import Navigation from '../../components/navigation';
import Header from '../../components/header';
import Heading from '../../components/heading';

const Home = () => {
	return (  
		<div className="home-container">
			<Navigation />
			<Header />
			<Heading title="Services" />
			Home
		</div>
	);
}
 
export default Home;