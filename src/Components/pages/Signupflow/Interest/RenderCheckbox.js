import React from 'react'
import IconCheck from './IconCheck'
import IconUnchecked from './IconUnchecked';
import "./RenderCheckBox.css"
import NavbarFlowInterest  from "./NavbarFlowInterest"
import logoflow1 from './logoflow1.png';
import logoflow2 from "./logoflow2.png"
import logoflow3 from "./logoflow3.png"
import logoflow4 from "./logoflow4.png"
import logoflow5 from "./logoflow5.png"
import logoflow6 from "./logoflow6.png"
import logoflow7 from "./logoflow7.png"
import logoflow8 from "./logoflow8.png"
import logoflow9 from "./logoflow9.png"
import logoflow10 from "./logoflow10.png"
import logoflow11 from "./logoflow11.png"
import logoflow12 from "./logoflow12.png"
import logoflow13 from "./logoflow13.png"
import logoflow14 from "./logoflow14.png"
import logoflow15 from "./logoflow15.png"
import logoflow16 from "./logoflow16.png"
import ButtonDisabled from './BtnDisabled'
import ButtonEnabled from './BtnEnabled'
import { Redirect } from "react-router-dom"




export default class RenderCheckbox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {			
			checked: false,
			check0: false,
			check1: false,
			check2: false,
			check3: false,
			check4: false,
			check5: false,
			check6: false,
			check7: false,
			check8: false,
			check9: false,
			check10: false,
			check11: false,
			check12: false,
			check13: false,
			check14: false,
			check15: false,
			check18: false,
			check19: false,
			check20: false,
			check21: false,
			check22: false,
			check23: false,
			check24: false,
		}
	
	}
	
	  doSomething  = ()=>{
		this.setState({redirectToNewPage: true})
	}
	
 btne = () =>{
	 return this.state.checked || this.state.check0 || this.state.check1 || this.state.check2 || this.state.check3
			|| this.state.check4 ||this.state.check5 || this.state.check6 || this.state.check7 || this.state.check8 || this.state.check9
 			|| this.state.check10 || this.state.check11 || this.state.check12 || this.state.check13 || this.state.check14 || this.state.check15
 			|| this.state.check16 || this.state.check17 || this.state.check18 || this.state.check19 || this.state.check20 || this.state.check21
			|| this.state.check22 ? <ButtonEnabled /> : <ButtonDisabled />
}



	icon = () =>{
		return this.state.checked ? <IconCheck /> : <IconUnchecked />
	}

	toggle = (event) => {
		event.preventDefault()
		  
		this.setState(function (state, props) {
			return {
				checked: !state.checked,
				
			}
		})
		
	}
	icon0 = () => {
		return this.state.check0 ? <IconCheck /> : <IconUnchecked />
	}

	toggle1 = (event) => {
		event.preventDefault()
		this.btne() 
		this.setState(function (state) {
			return {
				check0: !state.check0,
				
			}
		})

		this.setState(function (state){
			return {
			
			}
		})
	}

	icon1 = () => {
		return this.state.check1 ? <IconCheck /> : <IconUnchecked />
	}

	toggle2 = (event, state) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check1: !state.check1,
			
			}
		})
		this.setState(function (state) {
			return {
			
			}
		})
	}

	icon2 = () => {
		return this.state.check2 ? <IconCheck /> : <IconUnchecked />
	}

	toggle3 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check2: !state.check2,
			}
		})
	}
	icon3 = () => {
		return this.state.check3 ? <IconCheck /> : <IconUnchecked />
	}

	toggle4 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check3: !state.check3,
		
			}
		})
	}


	icon4 = () => {
		return this.state.check4 ? <IconCheck /> : <IconUnchecked />
	}

	toggle5 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check4: !state.check4,
		
			}
		})
	}

icon5 = () => {
		return this.state.check5 ? <IconCheck /> : <IconUnchecked />
	}

	toggle6 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check5: !state.check5,
		
			}
		})
	}

	icon6 = () => {
		return this.state.check6 ? <IconCheck /> : <IconUnchecked />
	}

	toggle7 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check6: !state.check6,
		
			}
		})
	}

	icon7 = () => {
		return this.state.check7 ? <IconCheck /> : <IconUnchecked />
	}

	toggle8 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check7: !state.check7,
		
			}
		})
	}


	icon8= () => {
		return this.state.check8 ? <IconCheck /> : <IconUnchecked />
	}

	toggle9 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check8: !state.check8,
		
			}
		})
	}


	icon9 = () => {
		return this.state.check9 ? <IconCheck /> : <IconUnchecked />
	}

	toggle10 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check9: !state.check9,
		
			}
		})
	}


	icon10 = () => {
		return this.state.check10 ? <IconCheck /> : <IconUnchecked />
	}

	toggle11 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check10: !state.check10,
		
			}
		})
	}


	
	icon11= () => {
		return this.state.check11 ? <IconCheck /> : <IconUnchecked />
	}

	toggle12 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check11: !state.check11,
		
			}
		})
	}


	icon12 = () => {
		return this.state.check12 ? <IconCheck /> : <IconUnchecked />
	}

	toggle13 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check12: !state.check12,
		
			}
		})
	}



	icon13 = () => {
		return this.state.check13 ? <IconCheck /> : <IconUnchecked />
	}

	toggle14 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check13: !state.check13,
		
			}
		})
	}



	icon14 = () => {
		return this.state.check14 ? <IconCheck /> : <IconUnchecked />
	}

	toggle15 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check14: !state.check14,
		
			}
		})
	}



	icon15 = () => {
		return this.state.check15 ? <IconCheck /> : <IconUnchecked />
	}

	toggle16 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check15: !state.check15,
		
			}
		})
	}



	icon16 = () => {
		return this.state.check16 ? <IconCheck /> : <IconUnchecked />
	}

	toggle17 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check16: !state.check16,
		
			}
		})
	}


	icon17 = () => {
		return this.state.check17 ? <IconCheck /> : <IconUnchecked />
	}

	toggle18 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check17: !state.check17,
		
			}
		})
	}


	icon18 = () => {
		return this.state.check18 ? <IconCheck /> : <IconUnchecked />
	}

	toggle19 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check18: !state.check18,
		
			}
		})
	}




	icon19 = () => {
		return this.state.check19 ? <IconCheck /> : <IconUnchecked />
	}

	toggle20 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check19: !state.check19,
		
			}
		})
	}


	icon20 = () => {
		return this.state.check20 ? <IconCheck /> : <IconUnchecked />
	}

	toggle21 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check20: !state.check20,
		
			}
		})
	}



	icon21 = () => {
		return this.state.check21 ? <IconCheck /> : <IconUnchecked />
	}

	toggle22 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check21: !state.check21,
		
			}
		})
	}


	icon22 = () => {
		return this.state.check22 ? <IconCheck /> : <IconUnchecked />
	}

	toggle23 = (event) => {
		event.preventDefault()
		this.setState(function (state) {
			return {
				check22: !state.check22,
			}
		})
	}

	render() {
		return (
			<div >
				<NavbarFlowInterest />
				<div className="scroll-over">
					<h1 >Get started by picking a few interests</h1>
				<div  className="general-card">
					<div className="griidd-parents">
						<div onClick={this.toggle} >
							<div>
									{this.icon()}
							</div>
					
					<div  className="boxxx">
							<div   style={{ 
							background: `url(${logoflow2})`,
							 height: "180px", width: "310px" ,
							backgroundSize: 'cover',
							backgroundRepeat: 'no-repeat',
							borderRadius: "4px",
							outline: "none",
							border: "none"
					}} >
					</div>
					
					</div>
								<span className="attributes">	Health </span>
      				  </div>

						<div onClick={this.toggle1} >
					{this.icon0()}
							<div className="boxxx" style={{
								background: `url(${logoflow1})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

					</div>
								<span className="attributes">Technology & Science</span>
        			</div>

						<div onClick={this.toggle2} >
							{this.icon1()}
							<div className="boxxx" style={{
								background: `url(${logoflow3})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} name= "che" >

							</div>
								<span className="attributes">Bussiness & Career</span>
        			</div>


						<div onClick={this.toggle3} >
							{this.icon2()}
							<div className="boxxx" style={{
								background: `url(${logoflow4})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes">Culture </span>
        			</div>


						<div onClick={this.toggle4} >
							{this.icon3()}
							<div className="boxxx" style={{
								background: `url(${logoflow5})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes">  Fashion & Styles</span>
        			</div>


						<div onClick={this.toggle5} >
							{this.icon4()}
							<div className="boxxx" style={{
								background: `url(${logoflow6})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes"> Wellness </span>
        			</div>


						<div onClick={this.toggle6} >
							{this.icon5()}
							<div className="boxxx" style={{
								background: `url(${logoflow7})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes"> Relationship </span>
        			</div>


						<div onClick={this.toggle7} >
							{this.icon6()}
							<div className="boxxx" style={{
								background: `url(${logoflow8})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes">   Religion </span>
        			</div>


						<div onClick={this.toggle8} >
							{this.icon7()}
							<div className="boxxx" style={{
								background: `url(${logoflow9})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes"> Cloud Computing</span>
        			</div>


						<div onClick={this.toggle9} >
							{this.icon8()}
							<div className="boxxx" style={{
								background: `url(${logoflow10})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
    				   Music & Entertainment
        			</div>


						<div onClick={this.toggle10} >
							{this.icon9()}
							<div className="boxxx" style={{
								background: `url(${logoflow11})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes"> Politics & Political Campaign </span>
        			</div>


						<div onClick={this.toggle11} >
							{this.icon10()}
							<div className="boxxx" style={{
								background: `url(${logoflow12})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes"> Gossip & BBN </span>
        			</div>


						<div onClick={this.toggle12} >
							{this.icon11()}
							<div className="boxxx" style={{
								background: `url(${logoflow13})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes">  Law & Legal System </span>
        			</div>


						<div onClick={this.toggle13} >
							{this.icon12()}
							<div className="boxxx" style={{
								background: `url(${logoflow14})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes"> Parenthing and Sex education </span>
        			</div>


						<div onClick={this.toggle14} >
							{this.icon13()}
							<div className="boxxx" style={{
								background: `url(${logoflow15})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes">   Travel and Tour </span>
        			</div>


						<div onClick={this.toggle15} >
							{this.icon14()}
							<div className="boxxx" style={{
								background: `url(${logoflow16})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes"> Delicacies & Nutrition </span>
        			</div>


						<div onClick={this.toggle16} >
							{this.icon15()}
							<div className="boxxx" style={{
								background: `url(${logoflow16})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes">  Languages & Culture </span>
        			</div>

						<div onClick={this.toggle17} >
							{this.icon16()}
							<div className="boxxx" style={{
								background: `url(${logoflow16})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes">     Beauty and Fashion </span>
        			</div>


						<div onClick={this.toggle18} >
							{this.icon17()}
							<div className="boxxx" style={{
								background: `url(${logoflow16})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes">  	Accounting </span>
        			</div>


						<div onClick={this.toggle19} >
					{this.icon18()}
							<div className="boxxx" style={{
								background: `url(${logoflow16})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

					</div>
								<span className="attributes">  Social-Therapy</span>
        			</div>


						<div onClick={this.toggle20} >
					{this.icon19()}
							<div className="boxxx" style={{
								background: `url(${logoflow16})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

					</div>
								<span className="attributes">  Guidance and Counseling </span>
        			</div>


						<div onClick={this.toggle21} >
							{this.icon20()}
							<div className="boxxx" style={{
								background: `url(${logoflow13})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes">  Photography</span>
        			</div>

						<div onClick={this.toggle22} >
							{this.icon21()}
							<div className="boxxx" style={{
								background: `url(${logoflow16})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes">  Technology & Science</span>
        			</div>


						<div onClick={this.toggle23} >
							{this.icon22()}
							<div className="boxxx" style={{
								background: `url(${logoflow11})`,
								height: "180px", width: "310px",
								backgroundSize: 'cover',
								backgroundRepeat: 'no-repeat',
								borderRadius: "4px",
							}} >

							</div>
								<span className="attributes">  Learning</span>
        			</div>
							<div>
							<span className="btn-interest--checked   flex-btn"  onClick={this.doSomething}>
								{this.state.redirectToNewPage && <Redirect to="./topics" / >}	
								{this.btne()}
							</span>
							</div>
						</div>
		</div>
		</div>

	</div>
		)
	}
}
