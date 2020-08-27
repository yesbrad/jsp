import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
	Link
} from "react-router-dom";
import Home from './screens/home';
import Service from './screens/service';
import Contact from './screens/contact';
  
const RenderService = () => {
	let { id } = useParams();

	return (
		<div>
			<Service service={id}/>
		</div>
	)
}

const App = () => {

  return (
	  <div className="App">
		  <Router>
				<Switch>
					<Route path='/service/:id'>
						<RenderService />
					</Route>
					<Route path='/contact'><Contact /></Route>
					<Route path='/'><Home /></Route>
				</Switch>
		  </Router>
    </div>
  );
}

export default App;
