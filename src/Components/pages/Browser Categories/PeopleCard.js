import React, { Component } from 'react';
import {
	Card, CardImg, CardText, 
	CardTitle, CardSubtitle, Button
} from 'reactstrap';


class PeopleCard extends Component {
	 

	render() {
		let { id, name, company, description } = this.props.person;
		return (
			<div>
	
				<Card>
					<CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
				
						<CardTitle>{name}</CardTitle>
						<CardSubtitle>{company}</CardSubtitle>
						<CardText>{description}</CardText>
						<Button color="danger" onClick={() => this.props.removePerson(id)}>Delete</Button>
					
				</Card>
			
			</div>
		)
	}
}
export default PeopleCard;
