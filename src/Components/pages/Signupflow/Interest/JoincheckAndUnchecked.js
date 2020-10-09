import React from 'react'
import NarrowCheck from "./NarrowCheck";
import NarrowUnchecked from "./NarrowUnchecked";

export default class JoincheckAndUnchecked extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: false
		}

		this.icon = this.icon.bind(this)
		this.toggle = this.toggle.bind(this)
	}

	icon() {
		return this.state.checked ? <NarrowCheck /> : <NarrowUnchecked />
	}

	toggle(event) {
		event.preventDefault()
		this.setState(function (state, props) {
			return {
				checked: !state.checked
			}
		})
	}

	render() {
		return (
			<div>
			<button
				style={Styles.button}
				onClick={this.toggle}>
				<div style={Styles.check}>
					{this.icon()} 
				</div>

			</button>

				<div style={Styles.content}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

const Styles = {
	button: {

		border: '1px solid gray',
		marginBottom: '0.5rem',
		fontSize: '1.6rem',
		display: 'flex',
		outline: '0',
		color: '#9B9B9B',
		margin: '0 auto',
		cursor: 'pointer',
		textAlign: 'center'
	},

	check: {
		// marginRight: '9rem'
	},

	content: {
		paddingTop: '0.2rem',
		fontSize: '0.9rem',
		fontWeight: '100',
		lineHeight: '1.25rem'
	}
}