
import './Signup.css'
import logo from './lolo.svg'
import {Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';



export default class Signup extends Component {
			state ={
				firstName : "",
				lastName: "",
				email: "",
				phone:"",
				username: "",
				password: "",
				remember: false,
			}
handleSubmit = (event )  =>{
	 event.preventDefault()
	 console.log(event.target.value)
}

handleChange = (event) =>{
	this.setState({
			[event.target.name ] : event.target.value,
			remember:true,
	})
}



	render() {
		return (
			<>
			
					<div className="loginForm">
						<img src={logo} className="App-logo" alt="logo" />
						<form action='https://sua-viewon-dev.herokuapp.com' method="POST" onSubmit={this.handleSubmit}  className="form_parent">

							<span className="larger-width">
								<input type="text" name="firstName" value={this.state.firstName} required size="50" onChange={this.handleChange} />
								<p>First Name</p>
								<label ><i className="fas fa-user"></i></label>
							</span>
							<span>
								<input type="text" name="lastName" value={this.state.lastName} required size="50" onChange={this.handleChange}/>
								<p>Last Name</p>
								<label ><i className="fas fa-user"></i></label>
							</span>
							<span>
								<input type="email" name="email" value={this.state.email} required size="50" onChange={this.handleChange} />
								<p>Email address</p>
								<label ><i class="fas fa-envelope"></i></label>
							</span>
							<span>
								<input type="tel" name="phone" value={this.state.phone} required size="50" onChange={this.handleChange}/>
								<p>Contact number</p>
								<label for="contact"><i class="fas fa-phone-volume"></i></label>
							</span>
							<span>
								<input type="text" name="username" value={this.state.username} required size="50" onChange={this.handleChange} />
								<p>Username</p>
								<label ><i className="fas fa-user"></i></label>
							</span>
							<span>
								<input type="password" name="password" value={this.state.password} required size="50" onChange={this.handleChange}/>
								<p>Password</p>
								<label ><i className="fas fa-lock"></i></label>
							</span>
						
							<label>
								<input type="checkbox"  value={this.state.remember} onChange={this.handleChange} name="remember" style={{marginBottom:"2px"}}/> Remember me
							</label>
							<div>
							<Link to="/ignup"><button type="button" className="btn10">Sign Up</button></Link>
							</div>

							<div className='withtheflowing' >or with the following:</div>
						</form>
						<div className="gmail_facebook">
							<button className='btn4' ><FaFacebook />&nbsp;Facebook</button>
							<button className='btn1' ><SiGmail />&nbsp;Gmail</button>
						</div>
	
							<p className="terms">
							By clicking <a href='#/' className='getstarted'>"Get Started"</a> or "Continue with Facebook",
								I accept the RM Terms Of Service, Community
								Guidelines and have read the Privacy Policy.
							</p>
						
					</div>


			
			</>
		)
	}
}
