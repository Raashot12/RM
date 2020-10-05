import React from 'react'
import NavbarFlow from './NavbarFlow';
import "./Goal.css"
import { Link } from "react-router-dom"


 const Goal = () => {
	return (
		<>
			<div>
				<NavbarFlow />
				<div className="house-flow">
					<div className="parent-flow">
						<h1 className="flow-welcome">What's your main reason for joining RM?</h1>
						<p className="flow-welcome"> This will help us make good recommendations for you.</p>
						<div className="interest-for  interest-bottom"> 
							<Link to="/interestchecked">	<button className="btn-interest">Develop a skill</button></Link>
						</div>
						<div className="interest-bottom">
							<Link to="/interestchecked">		<button className="btn-interest">Find activities I enjoy</button></Link>
						</div>
						
						<div className="interest-bottom">
							<Link to="/interestchecked">	<button className="btn-interest">Meet young likes mind</button></Link>
						</div>
						<div className="interest-bottom">
							<Link to="/interestchecked"><button className="btn-interest">To acquire knowledge</button></Link>
						</div >
						<div className="interest-bottom">
							<Link to="/interestchecked">		<button className="btn-interest">For Personal development</button></Link>
						</div>
						<div className="interest-bottom">
							<Link to="/interestchecked">		<button className="btn-interest">Something else</button></Link>
						</div>
					

					</div>
				</div>
			</div>

	


		</>
	)
}
export default Goal;