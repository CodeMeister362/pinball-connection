import React from 'react'
import './Location.css'
import { Link, Redirect } from 'react-router-dom'

const Location = ({ destination, shouldGo }) => {
	const goHere = destination ? destination.location : null
	if (!shouldGo) {
		return <Redirect to="/" />;
	}
	
	return (
		<div className="location">
			{goHere && (
				<>
					<h1>{goHere.name}</h1>
					<p>{goHere.street}</p>
					<p>{goHere.city}, {goHere.state}</p>
					<Link to="/results">
						<button>Back</button>
					</Link>
				</>
			)}
		</div>
	);
};
export default Location