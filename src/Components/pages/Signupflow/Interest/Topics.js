import React, { Component } from 'react'
import "./RenderCheckBox.css"
import NavbarFlowInterest from "./NavbarFlowInterest"
import "./Topic.css";
// import swipe from "./swip.gif"
// import {Link }from "react-router-dom"
 
 export default class Topics extends Component {
	constructor(props){
		super(props)
	this.state= {
	funtime: false,
	empowerment: false,
	social20: false,
	conversation: false,
	entertainment: false,
	social: false,
	anything: "",
}

	}
handleSubmit = (event) => {
	event.preventDefault()
	console.log(this.state);
	this.setState({

		anything: "",


	})
}

handleChange = (event) => {
	console.log(event.target.value)
	this.setState({
		[event.target.name]: event.target.value,
	})
}

	 handlefuntime =( ) =>{
		this.setState({
				funtime: !this.state.funtime
				
		})
	 }

	 handlesocial =()=>{
		 this.setState({
			 social: !this.state.social
		 })
	 }
	 handleempowerment = ( )=>{
		this.setState({
			empowerment: !this.state.empowerment
		})
	 }

	   handlesocial20 = ( ) =>{
		   this.setState({
			   social20: !this.state.social20
		   })
	   }
	   handleconversation = ( ) =>{
		this.setState({
			conversation: !this.state.conversation
		})
	   }
	handleentertainment = ( ) =>{
		this.setState ({
			entertainment:!this.state.entertainment
		})
	}



// handleClicks = () => {
// 	if (this.state.funtime === false|| this.state.empowerment === false|| this.state.social20 === false|| this.state.conversation === false || this.state.entertainment ===false
// 		|| this.state.social === false) {
// 		return	alert("please do checkbox to help narrow down your interest")
// 	}



// handleCheckbox = () => {
// 	this.setState({ checked: !this.state.checked });
// }


	 render() {
		 return (
			 <div>
				 <div>
				 <NavbarFlowInterest />
					 <form onSubmit={this.handleSubmit}>
						 <div id="nowitdown"  className="scroll-over2">
					 <h1 >Now Narrow it down</h1>
					<div className= "container-check">
							 <h3 className="opposite-each-others">Social</h3>
							 <div className="opposite-each-other  checkboxpositionfun">
								 <input type="checkbox" style={{ width: "40px", height: "18px" }} onClick={this.handlefuntime} name="funtime"  className="checkbox" />
								 <label className="container" >
										 Fun Time
								 </label>	
						 </div>
						<div className="borderline">  </div>
							 <div className="opposite-each-other  checkboxpositionempowe">
								 <input type="checkbox" style={{ width: "40px", height: "18px" }} name="empowerment" onClick ={this.handleempowerment}className="checkbox" />
								 <label className="container" >
										Woman Empowerment
								 </label>	
							</div>
							 <div className="borderline">  </div>
							 <div className="opposite-each-other  checkboxposition">
									 <input type="checkbox" style={{ width: "40px", height: "18px" }} name="social20" className="checkbox " onClick={this.handlesocial20} />
							<label className="container" > 			 
								
										 20's Social
								 </label>	
							 </div>		
							 <div className="borderline">  </div>

							 <div className="opposite-each-other  checkboxpositionconver">
									 <input type="checkbox" style={{ width: "40px", height: "18px" }} name="conversation"onClick={this.handleconversation} className="checkbox" />
						<label className="container" > 			 
									Conversation
								 </label>				
						 </div>
							 <div className="borderline">  </div>

							 <div className="opposite-each-other  checkboxpositionentertain">
								 <label className="container" >
										 <input type="checkbox" style={{ width: "40px", height: "18px" }} name="entertainment" onClick={this.handleentertainment}  className ="checkbox"/>
										 Entertainment
								 </label>
							 </div>

							 <div className="borderline">  </div>

							 <div className="opposite-each-other  checkboxpositionsocial">
								 <label className="container" >
										 <input type="checkbox" style={{ width: "40px", height: "18px" }} name="social" onClick={this.handlesocial} className ="checkbox"/>
										 Social
								 </label>
							 </div> 
					 </div>
					 <div className="text-area-for-narrowdown   space-down">
							 <h4 style={{ textAlign: "center", color: "#595D5F", margin:"0"}}> Anything else?</h4>
							 <input  type="text" size="27"  name="anything" onChange={this.handleChange} value={this.state.anything} />
							 <button className="btn-interest-narrow" type= "submit"  onSubmit={this.handleSubmit}>Next</button>
						 </div>
					</div>
					 </form>
					 {/* <Link to="#nowitdown" ><div  className="scroll-up" style={{
								background: `url(${swipe})`,
								height: "60px", width: "110px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
								float: "right",
								cursor: "pointer",
								marginBottom: "2rem"
					 }} > </div> </Link> */}
				 </div>
			 </div>
		 )
	 }
 }
 