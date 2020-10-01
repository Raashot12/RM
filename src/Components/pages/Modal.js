import React from 'react'
import"./Modal.css"
export default function Modal(props) {
	return (
		<div>
			
			<div id="popup1" class="overlay">
	<div class="popup">
		<h2>Welcome to RM </h2>
		<a class="close" href="/#">&times;</a>
		<div class="content">
		<h3> We are glad to have you on-board</h3>
		<h4>To join this community  click the link below to Sign up </h4>
		< button >Sign up here...</button>
		</div>
	</div>
</div>
		</div>
	)
}
