import React  from 'react';
import {  Link } from 'react-router-dom';
import Roll from 'react-reveal/Roll';
import './NavbarFlowInterest.css';
// import Signup from './Components/pages/Signup&Login/Signup';
import logoflow from './logoflow.png';

function NavbarFlowInterest() {


	return (
		<>
		<div className="parent-nav">
			<div className="logo-house">
				<Link to='/' >
					<Roll>
					<img src={logoflow} className='image-logoo' alt="company-logo" width='90px' height='43px' style={{marginLeft:"1.5rem",
				
				
				}} />
					</Roll>
				</Link>
				</div>
			<div>
						<span >
						<p style={{marginRight:"1.5rem", 
							color: "#2E3E48", fontWeight:"bold"
					}}>	Next</p>
							</span>
			</div>
			</div>
		</>
	);
}

export default NavbarFlowInterest;
