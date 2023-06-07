import React from 'react'
import './Location.css'

const Location = ({ destination }) => {
	const goHere = destination.location
	return(
		<div className='location'>
			<h1>{goHere.name}</h1>
			<p>{goHere.street}</p>
			<p>{goHere.city}, {goHere.state}</p>
			<button>Back</button>
		</div>
	)
}

export default Location