import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import './Slider.css'
import Webinar from './Webinar.js';
import contacts from './Data'

 function createCard(contact) {
	return (
		<div>
			<Webinar img={contact.imgURL} 
			key={contact.id}
			topics={contact.topic}
			company={contact.companyName}
			attend={contact.attendeesNumber}
			/>
		</div>
	)
}




export default function SliderTeachScience() {
	return (
		<div>
			<div className='parent--container'>
			<li className='first-item-first'>Tech & Science</li>
			<li className='first-item-second'>
				<BrowserRouter>
					<Link to='/see-all'>See all</Link>
				</BrowserRouter>
			</li>
		</div>
		{contacts.map(createCard)}
		</div>
	)
}
