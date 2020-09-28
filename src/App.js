import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, 
	Route} from 'react-router-dom'
import './App.css';
import Signup from './Components/pages/Signup&Login/Signup'
import Login from './Components/pages/Signup&Login/Login';
import Componentsfall from './Componentsfall';
function App() {
  return (
	<div>
    <Router>
		<Navbar />

		<Switch>
			<Route path="/" component={Componentsfall} exact />
			<Route path="/Login" component={Login} exact />
			<Route path="/Signup" component={Signup} exact/>
		</Switch>
	</Router>
	  </div>

  );
}

export default App;
