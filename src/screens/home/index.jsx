import React from 'react';
import './styles.scss';
import Navigation from '../../components/navigation';
import Header from '../../components/header';

const Home = () => {
	return (  
		<div className="home-container">
			<Navigation />
			<Header />
			Home
		</div>
	);
}
 
export default Home;