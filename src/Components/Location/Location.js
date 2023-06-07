import React from 'react'
import './Location.css'

const Location = ({ name }) => {
	return(
		<div className='location'>
			<h3>{name}</h3>
		</div>
	)
}

export default Location