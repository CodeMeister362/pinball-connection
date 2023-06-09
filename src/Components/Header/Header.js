import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className="header">
			<Link to='/'>
				<h1>Pinball Connections</h1>
				{/* <h1>Connections</h1> */}
			</Link>
		</div>
	)
}

export default Header 