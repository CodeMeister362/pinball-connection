import React from 'react'
import './Input.css'

class Input extends React.Component {
	constructor() {
		super()
		this.state = {
			cityInput: "",
		}
	}

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value})
	}

	searchCity = (event) => {
		event.preventDefault()
		const cityName = {
			...this.state
		}
		this.clearInput()
	}

	clearInput = () => {
		this.setState({ cityInput: "" })
	}

	render() {
		return(
			<form>
				<p>Search by city below</p>
				<input
					type='text'
					name='cityInput'
					placeholder='Enter City Name'
					value={this.state.cityInput}
					onChange={event => this.handleChange(event)}
				/>
				{/* <button onClick={}> Search </button> */}
			</form>
		)
	}
}

export default Input