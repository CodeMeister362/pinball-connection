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
					<p> {goHere.street}, {goHere.city}, {goHere.state}</p>
				</>
				<div>
					<h2>Pick a truth or dare!</h2>
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