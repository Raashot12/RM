
import "./Footer.css"
import logo from './lolo.svg'
import {Link } from 'react-router-dom';
import React, { Component } from 'react';
import { FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Footer from "./Footer";
import './Signup.css'






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
	 console.log(this.state)
	 this.handleClick();
	 this.setState({
		 firstName: "",
		 lastName: "",
		 email: "",
		 phone: "",
		 username: "",
		 password: "",
		 remember: false
	 })
}

handleChange = (event) =>{
	console.log(event.target.value)
	this.setState({
			[event.target.name ] : event.target.value,
			remember:true,
	})

}
	handleClick = ()=>{
		if (!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.phone || !this.state.username
			|| !this.state.password || !this.state.remember){
			alert("please do fill the form to register")
			return
		}
	}


	render() {
		return (
			< >
					<section className="signup-parent">
						<div className="loginForm">
							<img src={logo} className="App-logo" alt="logo" />
							<form action='https://sua-viewon-dev.herokuapp.com' method="POST" onSubmit={this.handleSubmit} className="form_parent">


							<span>
								<input type="text" name="firstName" value={this.state.firstName} required size="50" onChange={this.handleChange} />
								<p>First Name</p>
								<label ><i class="fas fa-user"></i></label>
							</span>

							<span>
								<input type="text" name="lastName" value={this.state.lastName} required size="50" onChange={this.handleChange} />
								<p>Last Name</p>
								<label ><i className="fas fa-user"></i></label>
							</span>
								<span>
									<input type="email" name="email" value={this.state.email} required size="50" onChange={this.handleChange} />
									<p>Email address</p>
									<label ><i class="fas fa-envelope"></i></label>
								</span>
							<span>
								<input type="tel" name="phone" value={this.state.phone} required size="50" onChange={this.handleChange} />
								<p>Phone Number</p>
								<label ><i className="fas fa-phone-volume"></i></label>
							</span>
							<span>
								<input type="text" name="username" value={this.state.username} required size="50" onChange={this.handleChange} />
								<p>Username</p>
								<label ><i className="fas fa-user"></i></label>
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
									<button type="submit" className="btn10" onClick={this.handleClick}>Sign up</button>
								</div>

								<div className='withtheflowing' >or with the following:</div>
							</form>
							<div className="gmail_facebook">
								<button className='btn4' ><FaFacebook />&nbsp;Facebook</button>
								<button className='btn1' ><SiGmail />&nbsp;Gmail</button>
							</div>

							<p className="terms">
								By clicking <a href='#/' className='getstarted'>"Sign up"</a> or "Continue with Facebook",
								I accept the RM Terms Of Service, Community
								Guidelines and have read the Privacy Policy.
							</p>
							<Link to="/ResetPassword"><p className="terms getstarted" > Forget password ?</p></Link>
						</div>
						<Footer />
					</section>
			</>
		)
	}
}



// <section className="signup-parent">

// 	<div className="loginForm">
// 		<img src={logo} className="App-logo" alt="logo" />
// 		<form action='https://sua-viewon-dev.herokuapp.com' method="POST" onSubmit={this.handleSubmit} className="form_parent">

// 			<span className="larger-width">
// 				<input type="text" name="firstName" value={this.state.firstName} size="50" onChange={this.handleChange} />
// 				<p>First Name</p>
// 				<label ><i className="fas fa-user"></i></label>
// 			</span>
// 			<span>
// 				<input type="text" name="lastName" value={this.state.lastName} size="50" onChange={this.handleChange} />
// 				<p>Last Name</p>
// 				<label ><i className="fas fa-user"></i></label>
// 			</span>
// 			<span>
// 				<input type="email" name="email" value={this.state.email} size="50" onChange={this.handleChange} />
// 				<p>Email address</p>
// 				<label ><i class="fas fa-envelope"></i></label>
// 			</span>
// 			<span>
// 				<input type="tel" name="phone" value={this.state.phone} size="50" onChange={this.handleChange} />
// 				<p>Contact number</p>
// 				<label for="contact"><i class="fas fa-phone-volume"></i></label>
// 			</span>
// 			<span>
// 				<input type="text" name="username" value={this.state.username} size="50" onChange={this.handleChange} />
// 				<p>Username</p>
// 				<label ><i className="fas fa-user"></i></label>
// 			</span>
// 			<span>
// 				<input type="password" name="password" value={this.state.password} size="50" onChange={this.handleChange} />
// 				<p>Password</p>
// 				<label ><i className="fas fa-lock"></i></label>
// 			</span>

// 			<label>
// 				<input type="checkbox" value={this.state.remember} onChange={this.handleChange} name="remember" style={{ marginBottom: "2px" }} /> Remember me
// 							</label>
// 			<div>
// 				<button type="submit" className="btn10">Sign Up</button>
// 			</div>

// 			<div className='withtheflowing' >or with the following:</div>
// 		</form>
// 		<div className="gmail_facebook">
// 			<button className='btn4' ><FaFacebook />&nbsp;Facebook</button>
// 			<button className='btn1' ><SiGmail />&nbsp;Gmail</button>
// 		</div>

// 		<p className="terms">
// 			By clicking <a href='#/' className='getstarted'>"Sign Up"</a> or "Continue with Facebook",
// 								I accept the RM Terms Of Service, Community
// 								Guidelines and have read the Privacy Policy.
// 							</p>
// 		<p className="terms getstarted" > Forget password ?</p>
// 	</div>
// </section>