describe('home page', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://pinballmap.com/api/v1/region/${location}/location_machine_xrefs.json;no_details=1`, {
      statusCode: 200,
      fixture: 'sample.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it.skip('should land on pinball connections home page', () => {
    cy.get('.logo')
  })
})