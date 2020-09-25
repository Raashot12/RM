import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, 
	Route} from 'react-router-dom'
import './App.css';
import Signup from './Components/pages/Signup&Login/Signup'
import Componentsfall from './Componentsfall'
function App() {
  return (
	<div>
    <Router>
		<Navbar />
		
		<Switch>
			<Route path="/" component={Componentsfall} exact />
			<Route path="/Signup" component={Signup} exact/>
			
		</Switch>
	</Router>
		  {/* <Componentsfall /> */}
	  </div>

  );
}

export default App;
