import React from 'react'
import './Footer.css'



 const Footer = () => {
	return (
		<>
			<section className='footer-parent'>
				<section className='footer-parent2'>
					<div className='webinar-parent'>
							Create your own webinar.
							<a href='./'>Get Started</a>
					</div>
				<div className='container1'>		
					<div className='account-container'>
							<h3>Your Account</h3>
							<p>Sign up</p>
							<p>Log in</p>
					</div>
						<div className='account-container'>
							<h3>Organise</h3>
							<p>Overview</p>
							<p>Pricing</p>
							<p>Blog</p>
					</div>
					<div>
						<h3>Services</h3>
						<p>How it works</p>
						<p>What does it cost to create event?</p>
						<p>How do we contact event organise</p>
					</div>
					</div>
					<div>	
						<h4>Follow Us</h4>
					</div>
					<div>
							<a href='https://www.facebook.com/'><span><i class="fab fa-facebook"></i></span></a>
							<a href='https://twitter.com/home'><span><i class="fab fa-twitter"></i></span></a>
							<a href='https://www.youtube.com/'><span><i class="fab fa-youtube"></i></span></a>
							<a href='https://www.instagram.com/?hl=en'><span><i class="fab fa-instagram-square"></i></span></a>
					</div>
				<div>
					<li>&copy 2020 RM</li>
					<li>Terms of Service</li>
					<li>Privacy Policy</li>
					<li>Cookie Policy</li>
				</div>
				</section>
			</section>
		</>
	)
}
export default Footer;
