import React from 'react'
import './Webinar.css';
import "react-alice-carousel/lib/alice-carousel.css";
import Carousl from "react-elastic-carousel";
import Item from "./Item";



const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

export default function Webinar(props) {

	return (
	
		<>
			<div className="slider-container">	
			<Carousl breakPoints={breakPoints}>
				<Item>
					<div className="single-cards-slide">
						<img className='webinar-img' src={props.img} alt='Trader selling Goods' width='100%' height='140px' />
						<div className='text-element'>
							<h4 className='date-year'>24TH SEPT, 2020  5:00 PM WAT</h4>
							<h4 className='topics'>The Role of SME in Economy<br></br> Growth</h4>
							<h5 className='company-name'> {props.company}</h5>
							<h6 className='attendees-number'>Attendees:{props.attend}</h6>
							<button className='btn5'>Read More...</button>
						</div>
					</div>
				</Item>
			
			<Item>	
				<div>
					<img className='webinar-img'src={props.img} alt='Trader selling Goods' width='100%' height='140px' />
					<div className='text-element'>
							<h4 className='date-year'>24TH SEPT, 2020  5:00 PM WAT</h4>
					<h4 className='topics'>The Role of SME in Economy<br></br> Growth</h4>
					<h5 className='company-name'> {props.company}</h5>
					<h6 className='attendees-number'>Attendees:{props.attend}</h6>
							<button className='btn5'>Read More...</button>
					</div>
				</div>
			</Item>
			<Item>
					<div>
						<img className='webinar-img' src={props.img} alt='Trader selling Goods' width='100%' height='140px' />
						<div className='text-element'>
							<h4 className='date-year'>24TH SEPT, 2020  5:00 PM WAT</h4>
							<h4 className='topics'>The Role of SME in Economy<br></br> Growth</h4>
							<h5 className='company-name'> {props.company}</h5>
							<h6 className='attendees-number'>Attendees:{props.attend}</h6>
							<button className='btn5'>Read More...</button>
						</div>
					</div>
			</Item>
				<Item>
					<div>
						<img className='webinar-img' src={props.img} alt='Trader selling Goods' width='100%' height='140px' />
						<div className='text-element'>
							<h4 className='date-year'>24TH SEPT, 2020  5:00 PM WAT</h4>
							<h4 className='topics'>The Role of SME in Economy<br></br> Growth</h4>
							<h5 className='company-name'> {props.company}</h5>
							<h6 className='attendees-number'>Attendees:{props.attend}</h6>
							<button className='btn5'>Read More...</button>
						</div>
					</div>
			</Item>
				<Item>
					<div>
					<img className='webinar-img'src={props.img} alt='Trader selling Goods' width='100%' height='140px' />
					<div className='text-element'>
							<h4 className='date-year'>24TH SEPT, 2020  5:00 PM WAT</h4>
					<h4 className='topics'>The Role of SME in Economy<br></br> Growth</h4>
					<h5 className='company-name'> {props.company}</h5>
					<h6 className='attendees-number'>Attendees:{props.attend}</h6>
							<button className='btn5'>Read More...</button>
					</div>
				</div>
			</Item>
				<Item>
					<div>
						<img className='webinar-img' src={props.img} alt='Trader selling Goods' width='100%' height='140px' />
						<div className='text-element'>
							<h4 className='date-year'>24TH SEPT, 2020  5:00 PM WAT</h4>
							<h4 className='topics'>The Role of SME in Economy<br></br> Growth</h4>
							<h5 className='company-name'> {props.company}</h5>
							<h6 className='attendees-number'>Attendees:{props.attend}</h6>
							<button className='btn5'>Read More...</button>
						</div>
					</div>
			</Item>
			</Carousl>
			</div>
		</>
		
	)
}




				
		