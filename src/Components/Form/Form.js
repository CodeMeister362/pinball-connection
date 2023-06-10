import React from 'react'
import './Form.css'
import { withRouter } from 'react-router-dom'
import cityData from '../../LocalData/cities'
import PropTypes from 'prop-types'

class Form extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			cityInput: "",
		}
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
		const cityOptions = cityData.map(city => (
			<option key={city} value={city} />
		));
		return(
			<form className='cityForm'>
				<input
					type='text'
					list='cities'
					id='cityInput'
					placeholder='Select From Dropdown'
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


Form.propTypes = {
	props: PropTypes.func
}