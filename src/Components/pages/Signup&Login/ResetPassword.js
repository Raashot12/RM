import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './ResetPassword.css'


export default class ResetPassword extends Component {

	state = {
		email: "",
	}
	handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.state)
		this.handleClick();
		this.setState({
			email: "",
		})
	}

	handleChange = (event) => {
		console.log(event.target.value)
		this.setState({
			[event.target.name]: event.target.value,
			remember: true,
		})

	}
	handleClick = () => {
		if ( !this.state.email ) {
			alert("Please enter your email address to reset")
			return
		}
	}








	render() {
		return (
			<div>
				<section className="signup-parent">
					<div className="loginForm">
						<h1 className="reset-password" >Reset Password</h1>
						<form action='https://sua-viewon-dev.herokuapp.com' method="POST" onSubmit={this.handleSubmit} className="form_parent">
							<span>
								<input type="email" name="email" value={this.state.email} required size="50" onChange={this.handleChange} />
								<p>Email address</p>
								<label ><i class="fas fa-envelope"></i></label>
							</span>
							<div>
								<button type="submit" className="btn10" onClick={this.handleClick} style={{marginBottom:"12px",  marginTop:"12px"}}>Reset</button>
							</div>

							<Link to="/NewData"><button type="button" className="btn10" onClick={this.handleClick}>Proceed</button></Link>
						</form>
						<p className="terms">
							By clicking <a href='#/' className='getstarted'>"Reset"</a> or "Continue with Facebook",
								I accept the RM Terms Of Service, Community
								Guidelines and have read the Privacy Policy.
							</p>
					</div>
				</section>
			</div>
		)
	}
}






// <div>
// 	<section className="signup-parent">
// 		<div className="loginForm">
// 			<h1 className="App-logo" >Reset Password</h1>
// 			<form action='https://sua-viewon-dev.herokuapp.com' method="POST" onSubmit={this.handleSubmit} className="form_parent">

// 				<span>
// 					<input type="email" name="email" value={this.state.email} required size="50" onChange={this.handleChange} />
// 					<p>Email address</p>
// 					<label ><i class="fas fa-envelope"></i></label>
// 				</span>

// 				<span>
// 					<input type="password" name="password" value={this.state.password} required size="50" onChange={this.handleChange} />
// 					<p>Password</p>
// 					<label ><i className="fas fa-lock"></i></label>
// 				</span>
// 				<div style={{ marginBottom: "12px" }}>
// 					<Link to="/ignup"><button type="button" className="btn10">Reset</button></Link>
// 				</div>
// 				<div >
// 					<Link to="/ignup"><button type="button" className="btn10">Proceed</button></Link>
// 				</div>
// 			</form>
// 			<p className="terms">
// 				By clicking <a href='#/' className='getstarted'>"Reset"</a> or "Continue with Facebook",
// 								I accept the RM Terms Of Service, Community
// 								Guidelines and have read the Privacy Policy.
// 							</p>
// 		</div>
// 	</section>
// </div>