import React from 'react'
import './Machine.css'
import { Link } from 'react-router-dom'

const Machine = ({ 
	name, 
	getLocation, 
	id, 
	handleClick, 
	getRandomNumber, 
	getQuestion, 
	getDare 
}) => {
	return(
		<div className='machine'>
			<div>
				<Link to={`/${id}`} className='results-link'>
					<h3 onClick={() => {
						getLocation(id)
						const randomNumber = getRandomNumber()
						getQuestion(randomNumber)
						getDare(randomNumber)
					}}>
						{name}
					</h3>
				</Link>
			</div>
			<div>
				<button onClick={() => handleClick(id)}>Remove From List</button>
			</div>
		</div>
	)
}

export default Machine