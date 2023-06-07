import React from 'react'
import './Location.css'
import { Link, Redirect } from 'react-router-dom'

const Location = ({ destination }) => {
	if(!destination.length) {
		return <Redirect to='/' />
	} else {
		const goHere = destination.location
		return(
			<div className='location'>
				<h1>{goHere.name}</h1>
				<p>{goHere.street}</p>
				<p>{goHere.city}, {goHere.state}</p>
				<Link to='/results'><button>Back</button></Link>
			</div>
		)
	}
}
export default Location