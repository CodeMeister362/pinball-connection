import React from 'react'
import './App.css'
import getLocationData from '../../apiCalls'
import mockData from '../../MockData/mockData'
import Results from '../Results/Results'
import Location from '../Location/Location'
import Form from '../Form/Form'
import Header from '../Header/Header'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			machineLocations: [],
			error: ""
		}
	}

	getLocations = (cityName) => {
		getLocationData(cityName)
		.then(data => {
			this.setState({ machineLocations: data.locations })
		})
		.catch(error => this.setState({ error: error.message }))
	}


	render() {
		return(
			<main>
				<Header />
				{this.state.error !== "" ? <h1>Whoops something went wrong: {`${this.state.error}`}</h1> :
				<div>
					<Form getLocations={this.getLocations}/>
					<Results />
					<Location />
				</div>
				} 
			</main>
		)
	}
}

export default App;
