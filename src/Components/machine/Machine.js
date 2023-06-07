import React from 'react'
import './Machine.css'

const Machine = ({ name }) => {
	return(
		<div className='machine'>
			<h3>{name}</h3>
		</div>
	)
}

export default Machine