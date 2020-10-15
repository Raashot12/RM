import React  from 'react';
import logo from './lolo.svg'
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Footer from "./Footer";
import "./Login.css"
import Navbar from '../Navigation/Navbar';
import useLogin from "./useLogin"
// import validateLogin from "./validateLogin"


const  Login = ( )=>{

	const { handleSubmit, handleChange, login } = useLogin(submit)

	// const doSomething = () =>{
	
		// const {email, password} = login;
		
	// 	if (  email.length === 0 || password.length  < 10 ){
	// 	return true  
	// 	} else 
	// 		return false;
	// }

	 function submit() {
	
	}


		return (
			<>
			<Navbar/>
			<section  className="signup-parent">
				<div className="loginForm">
					<img src={logo} className="App-logo" alt="logo" />
						<div className="welcome">					
						<h3 >Welcome Back!</h3>
						</div>
						<form onSubmit={handleSubmit} className="form_parent">

						<span>
								<input type="email" name="email" value={login.email} size="50" required onChange={handleChange} />
							<p>Email address</p>
							<label ><i class="fas fa-envelope"></i></label>
						</span>
						<span>
								<input type="password" name="password" value={login.password} size="50" required onChange={handleChange}  />
							<p>Password</p>
							<label ><i className="fas fa-lock"></i></label>
						</span>
					
						<div>
				<button type="submit" className="btn10" style={{marginTop: "15px"}}>Log in</button>
							
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
export default Login;








