import React from 'react'
import logoflow from "./logoflow.png"
import "./NavigationForNotLoggedin.css"
import EventPage from "./EventPage"
const NavigationForNotLoggedin = () => {
	return (
		<>
			<div className="nav-container">
				<div className="display-flex">
					<div className="boxxx" style={{
						background: `url(${logoflow})`,
						height: "40px", width: "90px",
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						borderRadius: "4px",
						position: "relative",
						paddingRight: "20px"
					}} >
					</div>
					<div className="flex-item13">
						<div className=" inputfield-parent">
							<label>
								<i class="fas fa-search"></i>
								<input type="text" className="inputfield" name="text" size="50" placeholder="Search">
								</input>
							</label>
						</div>
					</div>
				
					
						<div className="Creacte-event-for">
							<a href="/$">
								<button>
									Create  a webinar 
												</button>
							</a>
						</div>
						<div className="border"></div>
						<div className="loginbtn">
							<a href="/$">
								<button>
									Log in
												</button>
							</a>
						</div>
						<div className="signupbtn">
							<a href="/$">
								<button>
									Sign up
												</button>
							</a>
						</div>

					

				</div>
				</div>
				<EventPage/>
		</>
	)
}
export default NavigationForNotLoggedin;