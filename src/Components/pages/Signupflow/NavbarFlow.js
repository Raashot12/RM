import React  from 'react';
import {  Link } from 'react-router-dom';
import Roll from 'react-reveal/Roll';
import './NavbarFlow.css';
// import Signup from './Components/pages/Signup&Login/Signup';
import logoflow from './logoflow.png';

function NavbarFlow() {


	return (
		<>
			<nav className='navbarr' id='BackHome'>
				<Link to='/' className='navbar-logoo' >
					<Roll>
					<img src={logoflow} className='image-logoo' alt="company-logo" width='90px' height='43px' />
					</Roll>
				</Link>
		</nav>
		</>
	);
}

export default NavbarFlow;
