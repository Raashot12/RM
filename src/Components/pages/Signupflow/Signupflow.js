import React, { Component } from 'react'
import NavbarFlow from './NavbarFlow';
import "./Signupflow.css";
import { FaFacebook } from 'react-icons/fa';
import {Link} from "react-router-dom"

export default class Signupflow extends Component {
	render() {
		return (
			<div>
				<NavbarFlow/>
				<div className="house-flow">
				<div className ="parent-flow">
					<h1 className="flow-welcome">Welcome</h1>
						<p className="flow-welcome"> Add a photo so other members know who you are.</p>
					<div className="fasbackground"><i className="fas fa-user  fa-3x"></i></div>
					<div>
					<button className="upload-btn">Upload Photo</button>
							<p className="stroke">---------------------------- <span className="Or">OR</span> -------------------------</p>		
							<button className="upload-btn2"> <FaFacebook />&nbsp;Connect with facebook</button>

							<Link to="/Goal" style={{textDecorationLine:"none"}}>	<p className="skip">Skip for now</p></Link>
					</div>

				</div>
				</div>
			</div>
		)
	}
}
