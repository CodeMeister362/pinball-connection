describe('user flow: user starts on home page, fills out form and then clicks to visit results page', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://pinballmap.com/api/v1/region/bend/location_machine_xrefs.json;no_details=1`, {
      statusCode: 200,
      fixture: 'sample.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('should land on pinball connections home page. User should see logo, input field and a button', () => {
    cy.get('.logo').contains('Pinball Connections')
    cy.get('#cityInput').should('have.attr', 'placeholder')
    cy.get('button').contains('Find Pinball Machines')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('you should be able to select bend from the drop down, press find and end up on the results page', () => {
    cy.get("#cityInput").type('bend')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/results')
  })
})

describe('sad path', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://pinballmap.com/api/v1/region/bend/location_machine_xrefs.json;no_details=1`, {
      statusCode: 400,
      fixture: 'sample.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('should see an error of failed fetch when using incorrect city or state name', () => {
    cy.get("#cityInput").type('bend')
    cy.get('button').click()
    cy.get('.error-container > h1').contains("Something went wrong... Error: 400")
  })
})