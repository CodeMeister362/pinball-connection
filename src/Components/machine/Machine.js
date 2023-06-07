import React from 'react'
import './Machine.css'
import { Link } from 'react-router-dom'

const Machine = ({ name, getLocation, id }) => {
	return(
		<div className='machine'>
			<Link to={`/${id}`}><h3 onClick={() => getLocation(id)}>{name}</h3></Link>
		</div>
	)
}

export default Machine