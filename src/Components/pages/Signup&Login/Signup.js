
import "./Footer.css"
import logo from './lolo.svg'
import {Link } from 'react-router-dom';
import React  from 'react';
import { FaFacebook } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import Footer from "./Footer";
import './Signup.css'
import Navbar from '../Navigation/Navbar';
import useForm from "./useForm"
import validates from "./validatesignup"







 export const Signup = () =>{
	 const { handleSubmit, handleChange, values, checked,  errors } = useForm(  submit, validates)
	const { email, firstName, lastName, password,confirmPassword, phone, username }= values
		function doSomething(){
	
			if ( email === "" || firstName ===""  || lastName === "" || password === ""  || confirmPassword ===""  || phone === "" || username ===""){
				return true
			}else 
			return false ;
	
		}
	 function submit(){
		 
	
		 ///call back functiton
	 }


	


		return (
      <>
        <Navbar />
        <main className="mainwrapper">
          <div className="signupwrapper">
            <section className="signup-parent ">
              <div className="loginForm">
                <img src={logo} className="App-logo" alt="logo" />
                <form onSubmit={handleSubmit} className="form_parent">
                  <span>
                    <input
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                      size="50"
                    />
                    <p>First Name</p>
                    <label>
                      <i class="fas fa-user"></i>
                    </label>
                  </span>
                  {errors.firstName && (
                    <p className="errors"> {errors.firstName}</p>
                  )}
                  <span>
                    <input
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                      size="50"
                    />
                    <p>Last Name</p>
                    <label>
                      <i className="fas fa-user"></i>
                    </label>
                  </span>
                  {errors.lastName && (
                    <p className="errors"> {errors.lastName}</p>
                  )}
                  <span>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      size="50"
                    />
                    <p>Email address</p>
                    <label>
                      <i class="fas fa-envelope"></i>
                    </label>
                  </span>
                  {errors.email && <p className="errors"> {errors.email}</p>}
                  <span>
                    <input
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      size="50"
                    />
                    <p>Phone Number</p>
                    <label>
                      <i className="fas fa-phone-volume"></i>
                    </label>
                  </span>
                  {errors.phone && <p className="errors"> {errors.phone}</p>}
                  <span>
                    <input
                      type="text"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      size="50"
                    />
                    <p>Username</p>
                    <label>
                      <i className="fas fa-user"></i>
                    </label>
                  </span>
                  {errors.username && (
                    <p className="errors"> {errors.username}</p>
                  )}
                  <span>
                    <input
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      size="50"
                    />
                    <p>Password</p>
                    <label>
                      <i className="fas fa-lock"></i>
                    </label>
                  </span>
                  {errors.password && (
                    <p className="errors"> {errors.password}</p>
                  )}
                  <span>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      size="50"
                    />
                    <p>Confirm Password</p>
                    <label>
                      <i className="fas fa-lock"></i>
                    </label>
                  </span>
                  {errors.confirmPassword && (
                    <p className="errors"> {errors.confirmPassword}</p>
                  )}

                  <label>
                    <input
                      type="checkbox"
                      name="checked"
                      value={checked}
                      onChange={handleChange}
                      style={{ marginBottom: "2px" }}
                    />{" "}
                    Remember me
                  </label>
                  <div>
                    <button
                      type="submit"
                      className="btn10"
                      disabled={doSomething()}
                    >
                      Sign up
                    </button>
                  </div>

                  <div className="withtheflowing">or with the following:</div>
                </form>
                <div className="gmail_facebook">
                  <button className="btn4">
                    <FaFacebook />
                    &nbsp;Facebook
                  </button>
                  <button className="btn1">
                    <SiGmail />
                    &nbsp;Gmail
                  </button>
                </div>

                <p className="terms">
                  By clicking{" "}
                  <a href="#/" className="getstarted">
                    "Sign up"
                  </a>{" "}
                  or "Continue with Facebook", I accept the RM Terms Of Service,
                  Community Guidelines and have read the Privacy Policy.
                </p>
                <Link to="/ResetPassword">
                  <p className="terms getstarted"> Forget password ?</p>
                </Link>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </>
    );
} 
export default Signup;




