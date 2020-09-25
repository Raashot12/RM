import React from 'react'
import './Signup.css'


function Signup() {
	return (
		<div>
			<div className="loginForm">
				
				
					<form >
						
						<span className="larger-width">
							<input type="text" id="user" required size="50" />
							<p>First Name</p>
							<label for="password"><i className="fas fa-user"></i></label>
						</span>
						<span>
							<input type="text" id="user" required size="50" />
							<p>Last Name</p>
							<label for="password"><i className="fas fa-user"></i></label>
						</span>
						<span>
							<input type="password" id="password" required size="50" />
							<p>Password</p>
							<label for="password"><i className="fas fa-lock"></i></label>
						</span>
					</form>
				</div>

			
		</div>
	)
}
export default Signup;

