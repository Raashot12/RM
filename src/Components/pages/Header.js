import React from 'react'
import './Header.css'
import Bounce from 'react-reveal/Bounce'
import Navbar from "../Navbar"
import {Link } from  "react-router-dom"
import Filter from "./Filter"



const Header = () => {
	return (
		<>
		<div>
			<div className='top-header' id='backtohome'>
				<div className='header-wrapper'>
					<Bounce right='100min'>
						<h1>Discover events for all the things you love</h1>

					</Bounce>
				</div>
			
			</div>
			<div id="popup">
				<Navbar />
				<div class="popup-content center">
					<h1>Welcome </h1>
					<p>If you want to join this community, kindly tap the link below to Sign up</p>
						<Link to="./Signup" ><button className="Click-Me"> Click me &nbsp;<i class="fas fa-caret-right"></i><i class="fas fa-caret-right"></i><i class="fas fa-caret-right"></i><i class="fas fa-caret-right"></i></button></Link>
					<a href="/#" class="close-popup">&times;</a>
				</div>
			</div>
				<div className="btn-header">
				<a href="#popup" >Join RM</a>
			</div>
			{/* <button className=' btn-header ' id="popup" >Join RM </button> */}
				<Filter />
		</div>
	
	</>
	)
}
export default Header;
