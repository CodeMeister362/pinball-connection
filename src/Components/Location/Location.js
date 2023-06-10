import React from 'react'
import './Location.css'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const Location = ({ 
	destination, 
	shouldGo, 
	randomQuestion, 
	randomDare 
}) => {
	const goHere = destination ? destination.location : null
	
	if (!shouldGo) {
		return <Redirect to="/" />;
	}

	return (
		<div className="location">
			{goHere && (
				<div>
				<>
					<h1>{goHere.name}</h1>
					<p> {goHere.street}, {goHere.city}, {goHere.state}</p>
				</>
				<div>
					<h2>Loser picks truth or dare.</h2>
					<p>TRUTH: {randomQuestion.content}</p>
					<p>DARE: {randomDare.content}</p> 
				</div>
				<Link to="/results">
					<button>Back</button>
				</Link>
				</div>
			)}
		</div>
	);
};

export default Location


Location.propTypes = {
	destination: PropTypes.objectOf(
		PropTypes.shape({
			location: PropTypes.objectOf(
				PropTypes.shape({
					id: PropTypes.number.isRequired,
					name: PropTypes.string.isRequired,
					street: PropTypes.string.isRequired,
					state: PropTypes.string.isRequired
				})
			)
		})
	),
	shouldGo: PropTypes.bool,
	randomQuestion: PropTypes.objectOf(PropTypes.shape({
		id: PropTypes.number,
		type: PropTypes.string,
		content: PropTypes.string
	})),
	randomDare: PropTypes.objectOf(PropTypes.shape({
		id: PropTypes.number,
		type: PropTypes.string,
		content: PropTypes.string
	})),
	destination: PropTypes.objectOf(
		PropTypes.shape({
			machine: PropTypes.objectOf(
				PropTypes.shape({
					id: PropTypes.number.isRequired,
					name: PropTypes.string.isRequired,
				})
			)
		})
	)
}