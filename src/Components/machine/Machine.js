import React from 'react'
import './Machine.css'

const Machine = ({ name, getLocation, id }) => {
	return(
		<div className='machine'>
			<h3 onClick={() => getLocation(id)}>{name}</h3>
		</div>
	)
}

export default Machine