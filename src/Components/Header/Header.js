import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className="header">
			<Link to='/' className='header-link'>
				<h1 className='logo'>Pinball Connections</h1>
			</Link>
		</div>
	)
}

export default Header 