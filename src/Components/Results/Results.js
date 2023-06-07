import React from 'react'
import './Results.css'
import Location from '../../Components/Location/Location'

const Results = ({ list }) => {
	const locationList = list.location_machine_xrefs.map(place => {
		return (
			<Location 
				name={place.machine.name}
				key={place.id}
			/>
	)
})
console.log('here', locationList)
	return(
		<div className='location-container'>
			{locationList}
		</div>
	)
}

export default Results