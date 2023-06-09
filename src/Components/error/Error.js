import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ error }) => {
	return(
		<div>
			<h1>Something went wrong... Error: {error}</h1>
		</div>
	)
}

export default Error


Error.propTypes = {
	error: PropTypes.string
}