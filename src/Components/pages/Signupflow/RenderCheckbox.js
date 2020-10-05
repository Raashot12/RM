import React, { Component } from 'react'
import InterestCheckBox from "./InterestCheckBox"


export default class RenderCheckbox extends Component {
	constructor() {
		super();
		this.state = {
			name: 'React',
			checked: false
		};
	}

	handleCheckbox() {
		this.setState({ checked: !this.state.checked });
	}

	render() {
		return (
			<div>
				<InterestCheckBox>
					Hello  {this.state.checked}
				</InterestCheckBox>
				<input type="checkbox" checked={this.state.checked}
					onChange={this.handleCheckbox.bind(this)}
				/>
				{JSON.stringify(this.state.checked)}
			</div>
		)
	}
}


