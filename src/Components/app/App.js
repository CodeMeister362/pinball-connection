import React from 'react'
import './App.css'
import getLocationData from '../../apiCalls'
import mockData from '../../MockData/mockData'
import Results from '../Results/Results'
import Location from '../Location/Location'
import Form from '../Form/Form'
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom'
import Error from '../error/Error'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			machineData: [],
			error: "",
			location: [],
			shouldGo: false,
			empty: true,
		}
	}
	
	getAllLocations = (cityName) => {
		getLocationData(cityName)
		.then(data => {
			this.setState({ machineData: data.location_machine_xrefs })
		})
		.catch(error => this.setState({ error: error.message, empty: false }))
	}
			
	getLocation = (ID) => {
		const goToLocation = this.state.machineData.find(machine => {
			return machine.id === ID
		})
		this.setState({ location: goToLocation })
		this.setState({ shouldGo: true })
	}

	render() {
		return(
			<main>
				<Header />
				<Switch>
					<Route exact path='/' render={() => <Form getAllLocations={this.getAllLocations}/>} />
					<Route exact path='/results' render={() => (this.state.empty? <Results list={this.state.machineData} getLocation={this.getLocation}/> : <Error error={this.state.error}/>) }/>
					<Route exact path='/:id' render={() => <Location destination={this.state.location} shouldGo={this.state.shouldGo}/>}/>
					<Route exact path='*' render={() => <Error error={this.state.error}/>}/>
				</Switch>
			</main>
		)
	}
}

export default App;
