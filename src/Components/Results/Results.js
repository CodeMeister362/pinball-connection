import React from 'react'
import './Results.css'
import Machine from '../machine/Machine'

const Results = ({ list }) => {
	const machineList = list.location_machine_xrefs.map(place => {
		return (
			<Machine 
				name={place.machine.name}
				key={place.id}
				id={place.id}
			/>
	)
})
console.log('here', machineList)
	return(
		<div className='location-container'>
			{machineList}
		</div>
	)
}

export default Results