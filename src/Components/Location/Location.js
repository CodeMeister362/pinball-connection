import React from 'react'
import './Location.css'
import { Link, Redirect } from 'react-router-dom'

const Location = ({ destination, shouldGo }) => {
		console.log(shouldGo)
		const goHere = destination.location
		const JSX = (
		<div className='location'>
			<h1>{goHere.name}</h1>
			<p>{goHere.street}</p>
			<p>{goHere.city}, {goHere.state}</p>
			<Link to='/results'><button>Back</button></Link>
		</div>)
		return(
			<div>
			{shouldGo? JSX : <Redirect to='/' />}
			</div>
		)
}
export default Location