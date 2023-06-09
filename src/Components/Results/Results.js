import React from 'react'
import './Results.css'
import Machine from '../machine/Machine'

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
			<h2>Select a pinball machine below to find the address and a truth or dare challenge for the loser.</h2>
			{machineList}
		</div>
	)
}

export default Results