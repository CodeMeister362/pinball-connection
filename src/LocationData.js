const locationData = () => {
	return fetch ("https://pinballmap.com/api/v1/regions.json")
	.then(response => {
		if(!response.ok) {
			throw new Error(`${response.status}`)
		} else {
			return response.json()
		}
	})
}

export default locationData