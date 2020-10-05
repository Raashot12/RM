import React, { Component } from 'react';
import logo from './lolo.svg'
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Footer from "./Footer";
import "./Login.css"
import Navbar from '../Navigation/Navbar';



export default class Login extends Component {
	state = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		username: "",
		password: "",
		remember: false,
	}
	handleSubmit = (event) => {
		event.preventDefault()
		console.log(event.target.value)
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
			remember: true,
		})
	}
	render() {
		return (
			<>
			<Navbar/>
			<section  className="signup-parent">
				<div className="loginForm">
					<img src={logo} className="App-logo" alt="logo" />
						<div className="welcome">					
						<h3 >Welcome Back!</h3>
						</div>
					<form action='https://sua-viewon-dev.herokuapp.com' method="POST" onSubmit={this.handleSubmit} className="form_parent">

						<span>
							<input type="email" name="email" value={this.state.email} required size="50" onChange={this.handleChange} />
							<p>Email address</p>
							<label ><i class="fas fa-envelope"></i></label>
						</span>

						<span>
							<input type="password" name="password" value={this.state.password} required size="50" onChange={this.handleChange} />
							<p>Password</p>
							<label ><i className="fas fa-lock"></i></label>
						</span>

						<label>
							<input type="checkbox" value={this.state.remember} onChange={this.handleChange} name="remember" style={{ marginBottom: "2px" }} /> Remember me
							</label>
						<div>
							<Link to="/ignup"><button type="button" className="btn10">Log in</button></Link>
						</div>

						<div className='withtheflowing' >or with the following:</div>
					</form>
					<div className="gmail_facebook">
						<button className='btn4' ><FaFacebook />&nbsp;Facebook</button>
						<button className='btn1' ><SiGmail />&nbsp;Gmail</button>
					</div>

					<p className="terms">
						By clicking <a href='#/' className='getstarted'>"Log in"</a> or "Continue with Facebook",
								I accept the RM Terms Of Service, Community
								Guidelines and have read the Privacy Policy.
							</p>
						<Link to="/ResetPassword"><p className="terms getstarted" > Forget password ?</p></Link>
				</div>
				</section>
				<Footer/>
			</>
		)
	}
}
