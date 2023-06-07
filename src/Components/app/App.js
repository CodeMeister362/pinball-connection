import React from 'react'
import './App.css'
import getLocationData from '../../apiCalls'
import mockData from '../../MockData/mockData'
import Results from '../Results/Results'
import Location from '../Location/Location'
import Form from '../Form/Form'
import Header from '../Header/Header'
import { Route, Routes } from 'react-router-dom'
import Error from '../error/Error'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			machineData: [],
			error: "",
			location: [],
			shouldGo: false,
		}
	}
	
	getLocations = (cityName) => {
		getLocationData(cityName)
		.then(data => {
			this.setState({ machineData: data.location_machine_xrefs })
			console.log('data', data)
		})
		.catch(error => this.setState({ error: error.message }))
	}
			
	getLocation = (ID) => {
		const goToLocation = this.state.machineData.location_machine_xrefs.find(machine => {
			return machine.id === ID
		})
		this.setState({ location: goToLocation })
		this.setState({ shouldGo: true })
	}

	render() {
		console.log('afterSet', this.state.machineData)
		return(
			<main>
				<Header />
				<Routes>
					{/* <Route path='/Results' element={<Results list={this.state.machineData} getLocation={this.getLocation}/> }/> */}
					{/* <Route exact path='/:id' element={<Location list={this.state.machineData} destination={this.state.location}/>}/> */}
					<Route exact path='/' element={<Form getLocations={this.getLocations}/>} />
					<Route exact path='*' element={<Error />}/>
				</Routes>
				<Results list={this.state.machineData} getLocation={this.getLocation}/>
			</main>
		)
	}
}

export default App;
