import React, { useState, useContext } from 'react';
import {  Link } from 'react-router-dom';
import Roll from 'react-reveal/Roll';
import './Navbar.css';
// import Signup from './Components/pages/Signup&Login/Signup';
import logo from './logo.png';
import Dropdown from './Dropdown';
import Dropdowns from './Dropdowns';
import Context from "../store/context"

function Navbar() {
	const [click, setClick] = useState(false);
	const [dropdown, setDropdown] = useState(false);
	const [dropdowns, setDropdowns] = useState(false);	
	const {globalState, globalDispatch } = useContext(Context);
	const handleClick = () => setClick(!click);
	// const closeMobileMenu = () => setClick(false);

	const onMouseEnter = () => {
		if (window.innerWidth > 960) {
			setDropdown(true);
		} else {
			setDropdown(true);
		}
	};

	const onMouseLeave = () => {
		if (window.innerWidth > 960) {
			setDropdown(false);
		} else {
			setDropdown(false);
		}
	};



	const onMouseEnters = () => {
		if (window.innerWidth > 960) {
			setDropdowns(true);
		} else {
			setDropdowns(true);
		}
	};

	const onMouseLeaves = () => {
		if (window.innerWidth > 960) {
			setDropdowns(false);
		} else {
			setDropdowns(false);
		}
	};



	return (
		<>
			<nav className='navbar' id='BackHome'>
				<Link to='/' className='navbar-logo' >
					<Roll>
					<img src={logo} className='image-logo' alt="company-logo" width='90px' height='43px' />
					</Roll>
				</Link>
				<div className='menu-icon' onClick={handleClick}>
					<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
				</div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li
						className='nav-item'
						onMouseEnter={onMouseEnters}
						onMouseLeave={onMouseLeaves}
					>
						<Link
			
							className='nav-links'
							// onClick={closeMobileMenu}
						>
							Organize <i className='fas fa-caret-down' />
						</Link>
						{dropdowns && <Dropdowns />}
					</li>
					<li
						className='nav-item'
						onMouseEnter={onMouseEnter}
						onMouseLeave={onMouseLeave}
					>
						<Link
							
							className='nav-links'
							// onClick={closeMobileMenu}
						>
							Services <i className='fas fa-caret-down' />
						</Link>
						{dropdown && <Dropdown />}
					</li>
					<li className='nav-item'>
						<Link
							to='/products'
							className='nav-links'
							// onClick={closeMobileMenu}
						>
							+Create Events
            </Link>
					</li>
				
					<li>
						<Link
							to='/Login'
							className='nav-links-mobile'
							// onClick={closeMobileMenu}
						>
							LOG IN
            </Link>
					</li>
					<li>
						<Link
							to='/Signup'
							className='nav-links-mobile'
							// onClick={closeMobileMenu}
						>
							SIGN UP
            			</Link>
					</li>
				</ul>
			
					
							<Link to="/Signup"><button type="button" className="btn2">Sign Up</button></Link>
				
				<Link to="/Login">
					
				<button className='btn'>Log in</button>
				</Link>
			
			</nav>
		</>
	);
}

export default Navbar;
