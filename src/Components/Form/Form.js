import React from 'react'
import './Form.css'
import { withRouter } from 'react-router-dom'
import cities from '../../LocalData/cities'

class Form extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			cityInput: "",
		}
		console.log('test', props)
	}
	
	handleChange = (event) => {
		const value = event.target.value
		this.setState({ cityInput: value })
	}
	
	searchCity = (event) => {
		event.preventDefault()
		const cityName = this.state.cityInput
		this.props.getAllLocations(cityName)
		this.clearInput()
		this.props.history.push('/results')
	}

	clearInput = () => {
		this.setState({ cityInput: "" })
	}
	
	render() {
		const cityOptions = cities.map(city => (
			<option key={city} value={city} />
		));
		return(
			<form className='cityForm'>
				<input
					type='text'
					list='cities'
					id='cityInput'
					placeholder='Select City or State'
					value={this.state.cityInput}
					onChange={ event => this.handleChange(event) }
				/>
				<datalist id='cities'>{cityOptions}</datalist>
				<button onClick={ event => this.searchCity(event) }> Find Pinball Machines </button>
			</form>
		)
	}
}

export default withRouter(Form)