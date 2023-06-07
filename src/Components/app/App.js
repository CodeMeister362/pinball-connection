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
			machineData: mockData,
			error: "",
			location: [],
			shouldGo: false
		}
	}
	
	// getLocations = (cityName) => {
		// 	getLocationData(cityName)
		// 	.then(data => {
			// 		this.setState({ machineData: data.locations })
			// 	})
			// 	.catch(error => this.setState({ error: error.message }))
			// }
			
			getLocation = (ID) => {
				const goToLocation = this.state.machineData.location_machine_xrefs.find(machine => {
					return machine.id === ID
				})
				this.setState({ location: goToLocation })
				this.setState({ shouldGo: true })
	}

	render() {
		return(
			<main>
				<Header />
				{/* <Form getLocations={this.getLocations}/> */}
				<Results list={this.state.machineData} getLocation={this.getLocation}/>
				<Location list={this.state.machineData} destination={this.state.location}/>
			</main>
		)
	}
}

export default App;
