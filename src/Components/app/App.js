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
		}
	}
	
	getLocations = (cityName) => {
		getLocationData(cityName)
		.then(data => {
			this.setState({ machineData: data.location_machine_xrefs })
		})
		.catch(error => this.setState({ error: error.message }))
	}
			
	getLocation = (ID) => {
		console.log('before method', this.state.machineData)
		const goToLocation = this.state.machineData.find(machine => {
			return machine.id === ID
		})
		console.log('method', goToLocation)
		this.setState({ location: goToLocation })
		this.setState({ shouldGo: true })
	}

	render() {
		console.log('afterSet', this.state.machineData)
		return(
			<main>
				<Header />
				<Switch>
					<Route exact path='/results' render={() => <Results list={this.state.machineData} getLocation={this.getLocation}/> }/>
					<Route exact path='/:id' render={({ match }) => <Location list={this.state.machineData} destination={this.state.location} id={match.params.id}/>}/>
					<Route exact path='/' render={() => <Form getLocations={this.getLocations}/>} />
					<Route exact path='*' render={() => <Error />}/>
				</Switch>
			</main>
		)
	}
}

export default App;
