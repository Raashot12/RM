import React from 'react';
// import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, 
	Route} from 'react-router-dom'
import './App.css';
import './Grid.css'
import Signup from './Components/pages/Signup&Login/Signup'
import Login from './Components/pages/Signup&Login/Login';
import ResetPassword from './Components/pages/Signup&Login/ResetPassword';
import Componentsfall from './Componentsfall';
import Signupflow from './Components/pages/Signupflow/Signupflow';
import Goal from "./Components/pages/Signupflow/Goal"
// import NavbarFlow from "./Components/pages/Signupflow/Interest/NavbarFlowInterest"
import RenderCheckbox from "./Components/pages/Signupflow/Interest/RenderCheckbox"



function App() {
  return (
	<div>
    <Router>
	

		<Switch>
			<Route path="/" component={Componentsfall} exact />
			<Route path="/Login" component={Login} exact />
			<Route path="/Signup" component={Signup} exact/>
			<Route path="/ResetPassword" component={ResetPassword} exact />
			<Route path="/Signupflow" component={Signupflow} exact />
			 <Route path="/Goal" component={Goal} exact />
				  <Route path="/interestchecked" component={RenderCheckbox} exact />

		</Switch>
	</Router>
	  </div>

  );
}

export default App;
