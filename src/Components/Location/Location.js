import React from 'react'
import './Location.css'

const Location = ({ list, id }) => {
	const locationList = list.location_machine_xrefs.map(location => {
		return console.log('this one', location.id)
	})

	//if event.target.id equals location.id then return 

	return(
		<div className='location'>
			<h1>{locationList}</h1>
		</div>
	)
}

export default Location