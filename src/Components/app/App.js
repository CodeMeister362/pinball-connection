import React from 'react'
import './App.css'
import getLocationData from '../../apiCalls'
import mockData from '../../MockData/mockData'
import Results from '../Results/Results'
import Location from '../Location/Location'
import Input from '../input/Input'
import Header from '../Header/Header'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			machineLocations: [mockData],
			error: ""
		}
	}

	componentDidMount = () => {
		// getLocationData("bend")
		// .then(data => {
		// 	this.setState({ machineLocations: data.locations })
		// })
		// .catch(error => this.setState({ error: error.message }))
	}

	searchCity = () => {

	}

	handleChange = (event) => {
		event.target.name = 'city'
	}

	render() {
		return(
			<body>
				<Header />
				{this.state.error !== "" ? <h1>Whoops something went wrong: {`${this.state.error}`}</h1> :
				<div>
					<Input />
					<Results />
					<Location />
				</div>
				} 
			</body>
		)
	}
}

export default App;
