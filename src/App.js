import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Home from './screens/home';
import Service from './screens/service';
  
function App() {
  return (
	  <div className="App">
		  <Router>
				<Switch>
					<Route path='/service'><Service /></Route>
					<Route path='/'><Home /></Route>
				</Switch>
		  </Router>
    </div>
  );
}

export default App;
