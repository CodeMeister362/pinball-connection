import React from 'react'
import './Location.css'
import { Link, Redirect } from 'react-router-dom'

const Location = ({ destination, shouldGo, randomQuestion, randomDare }) => {
	const goHere = destination ? destination.location : null
	if (!shouldGo) {
		return <Redirect to="/" />;
	}
	console.log(randomQuestion, randomDare, destination)
	
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
					<h2>Truth or Dare?</h2>
				</div>
				</div>
			)}
		</div>
	);
};

export default Location