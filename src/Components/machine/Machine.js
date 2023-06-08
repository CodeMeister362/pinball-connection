import React from 'react'
import './Machine.css'
import { Link } from 'react-router-dom'

const Machine = ({ name, getLocation, id, handleClick }) => {
	return(
		<div className='machine'>
			<div className=''>
				<Link to={`/${id}`}>
					<h3 onClick={() => getLocation(id)}>{name}</h3>
				</Link>
			</div>
			<div>
				<button onClick={() => handleClick(id)}>Remove From List</button>
			</div>
		</div>
	)
}

export default Machine