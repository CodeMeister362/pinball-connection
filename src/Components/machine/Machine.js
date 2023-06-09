import React from 'react'
import './Machine.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

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


Machine.propTypes = {
	name: PropTypes.string.isRequired,
	getLocation: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired,
	handleClick: PropTypes.func.isRequired,
	getRandomNumber: PropTypes.func.isRequired,
	getQuestion: PropTypes.func.isRequired,
	getDare: PropTypes.func.isRequired,
}
