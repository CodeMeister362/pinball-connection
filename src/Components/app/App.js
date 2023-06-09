import React from 'react'
import './App.css'
import getLocationData from '../../apiCalls'
import Results from '../Results/Results'
import Location from '../Location/Location'
import Form from '../Form/Form'
import Header from '../Header/Header'
import { Route, Switch } from 'react-router-dom'
import Error from '../error/Error'
import questionData from '../../LocalData/questions'
import dareData from '../../LocalData/dares'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			machineData: [],
			error: "",
			location: [],
			shouldGo: false,
			empty: true,
			randomQuestion: "",
			randomDare: "",
		}
	}

	getRandomNumber = () => {
		return Math.floor(Math.random() * 26)
	}

	getQuestion = (num) => {
		const question = questionData.find(question => {
			return question.id === num
		})
		this.setState({ randomQuestion: question })
	}

	getDare = (num) => {
		const dare = dareData.find(dare => {
			return dare.id === num
		})
		this.setState({ randomDare: dare })
	}
	
	getAllLocations = (cityName) => {
		getLocationData(cityName)
		.then(data => {
			this.setState({ machineData: data.location_machine_xrefs })
		})
		.catch(error => this.setState({ 
			error: error.message, 
			empty: false 
		}))
	}
			
	getLocation = (ID) => {
		const goToLocation = this.state.machineData.find(machine => {
			return machine.id === ID
		})
		this.setState({ 
			location: goToLocation, 
			shouldGo: true 
		})
	}
	
	handleClick = (ID) => {
		const getMachines = this.state.machineData.filter(machine => {
			return machine.id !== ID
		})
		this.setState({ machineData: getMachines })
	}

	render() {
		const isEmpty = this.state.empty
		const state = this.state
		return(
			<main className='main'>
				<Header />
				<Switch>
					<Route exact path='/' render={ () => 
						<Form getAllLocations={this.getAllLocations}/> } 
					/>
					<Route exact path='/results' render={ () => (
						isEmpty? 
						<Results 
							list={state.machineData} 
							getLocation={this.getLocation} 
							handleClick={this.handleClick} 
							getRandomNumber={this.getRandomNumber}
							getQuestion={this.getQuestion}
							getDare={this.getDare}
						/> 
						: <Error error={state.error}/>) }
					/>
					<Route exact path='/:id' render={ () => 
						<Location 
							destination={state.location} 
							shouldGo={state.shouldGo} 
							randomQuestion={state.randomQuestion} 
							randomDare={state.randomDare}
						/> } 
					/>
					<Route exact path='*' render={ () => 
						<Error error={state.error}/> }
					/>
				</Switch>
			</main>
		)
	}
}

export default App;
