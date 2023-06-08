import React from 'react'
import './Form.css'
import { withRouter } from 'react-router-dom'

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
		const cities = [
			"sandiego", "cheyenne", "wichita", "memphis", "montreal", "boise", "rhode-island", "west-oz", "bellingham", "richmond", "philadelphia", "centralpa", "reno", "eugene", "champaign", "manitoba", "toronto", "wisconsin", "minnesota", "nebraska", "colorado", "ca-central", "bc", "ca-valley", "indiana", "brisbane", "connecticut", "nashville", "portland", "oregon-south", "buffalo", "youngstown", "calgary", "massachusetts", "oklahoma", "columbia-mo", "raleigh-durham", "san-antonio", "columbia", "cincinnati", "atlanta", "bend", "tucson", "ottawa", "louisville", "dc", "jacksonville", "spokane", "chicago", "seattle", "hawaii", "birmingham", "charlotte", "iowa", "tallahassee", "asheville", "houston", "southflorida", "tampabay", "baltimore", "syracuse",  "lasvegas", "utah", "hudsonvalley", "charleston", "rochester", "oceancity", "cleveland", "stlouis", "columbus", "sacramento", "anchorage", "nsw", "tricities", "savannah", "kansascity", "newjersey", "detroit", "phoenix", "florida-central", "albuquerque", "west-virginia", "dfw", "nyc", "arkansas", "finland", "new-hampshire", "vermont", "maine", "austin", "delaware", "pittsburgh", "la", "michigan-north", "michigan-sw", "bayarea"
		];
		const cityOptions = cities.map(city => (
			<option key={city} value={city} />
		));

		return(
			<form className='cityForm'>
				<p>Search For Pinnball Machines Below</p>
				<input
					type='text'
					list='cities'
					id='cityInput'
					placeholder='City or State'
					value={this.state.cityInput}
					onChange={ event => this.handleChange(event) }
				/>
				<datalist id='cities'>{cityOptions}</datalist>
				<button onClick={ event => this.searchCity(event) }> Search </button>
			</form>
		)
	}
}

export default withRouter(Form)