import React from 'react'
import './Location.css'
import { Link, Redirect } from 'react-router-dom'

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
					<p>{goHere.street}</p>
					<p>{goHere.city}, {goHere.state}</p>
					<Link to="/results">
						<button>Back</button>
					</Link>
				</>
				<div>
					<h2>Pinnball loser picks a truth or dare!</h2>
					<p>Truth: {randomQuestion.content}</p>
					<p>Or</p>
					<p>Dare: {randomDare.content}</p> 
				</div>
				</div>
			)}
		</div>
	);
};

export default Location