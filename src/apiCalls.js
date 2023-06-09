const getLocationData = (location) => {
	return fetch (`https://pinballmap.com/api/v1/region/${location}/location_machine_xrefs.json;no_details=1`)
	.then(response => {
		if(!response.ok) {
			throw new Error(`${response.status}`)
		} else {
			return response.json()
		}
	})
}

export default getLocationData