import React from 'react'
import './Results.css'
import Machine from '../machine/Machine'
import PropTypes from 'prop-types'
import Error from '../error/Error'

const Results = ({ 
	list, 
	getLocation, 
	handleClick, 
	getRandomNumber, 
	getQuestion, 
	getDare,
}) => {
	const machineList = list.map(place => {
		return (
			<Machine 
				name={place.machine.name}
				key={place.id}
				id={place.id}
				getLocation={getLocation}
				handleClick={handleClick}
				getRandomNumber={getRandomNumber}
				getQuestion={getQuestion}
				getDare={getDare}
			/>
	)
})
	return(
		<div className='machine-container'>
			<h2>Select a pinball machine below to find the address and a truth or dare challenge.</h2>
			{machineList}
		</div>
	)
}

export default Results


Results.propTypes = {
	list: PropTypes.arrayOf(
		PropTypes.objectOf(
			PropTypes.shape({
				id: PropTypes.number.isRequired,
				location: PropTypes.objectOf(
					PropTypes.shape({
						id: PropTypes.number.isRequired,
						name: PropTypes.string.isRequired,
						street: PropTypes.string.isRequired,
						state: PropTypes.string.isRequired
					})
				)
			})
		)
	),
	list: PropTypes.arrayOf(
		PropTypes.objectOf(
			PropTypes.shape({
				machine: PropTypes.objectOf(
					PropTypes.shape({
						id: PropTypes.number.isRequired,
						name: PropTypes.string.isRequired
					})
				)
			})
		)
	),
	getLocation: PropTypes.func.isRequired,
	handleClick: PropTypes.func.isRequired,
	getRandomNumber: PropTypes.func.isRequired,
	getQuestion: PropTypes.func.isRequired,
	getDare: PropTypes.func.isRequired
}
