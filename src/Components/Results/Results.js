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
			{machineList}
		</div>
	)
}

export default Results