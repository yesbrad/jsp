import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
	Link,
	useLocation
} from "react-router-dom";
import Home from './screens/home';
import Service from './screens/service';
import Contact from './screens/contact';
import About from './screens/about';
import { useTransition, animated } from 'react-spring'

const RenderService = () => {
	let { id } = useParams();

	return (
			<Service service={id}/>
	)
}

const AppTrans = () => {
  const location = useLocation()

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0},
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return transitions.map(({ item: location, props, key }) => (
		<animated.div key={key} style={props}>
			<Switch location={location}>
				<Route path='/service/:id'>
					<div style={{position: 'absolute', width: '100%', height: '100%'}}><RenderService /></div>
				</Route>
				<Route path='/services'><div style={{position: 'absolute', width: '100%', height: '100%'}}><Home goToService /></div></Route>
				<Route path='/about-us'><div style={{position: 'absolute', width: '100%', height: '100%'}}><About /></div></Route>
				<Route path='/contact'><div style={{position: 'absolute', width: '100%', height: '100%'}}><Contact /></div></Route>
				<Route path='/'><div style={{position: 'absolute', width: '100%', height: '100%'}}><Home /></div></Route>
				</Switch>
		</animated.div>
  ));
}

const App = () => (
	<Router>
		<AppTrans />
	</Router>
)

export default App;
