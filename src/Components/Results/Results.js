import React from 'react'
import './Results.css'
import Machine from '../machine/Machine'

const Results = ({ list, getLocation, handleClick }) => {
	const machineList = list.map(place => {
		return (
			<Machine 
				name={place.machine.name}
				key={place.id}
				id={place.id}
				getLocation={getLocation}
				handleClick={handleClick}
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