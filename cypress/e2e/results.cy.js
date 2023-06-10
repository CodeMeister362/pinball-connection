describe('user flow: user sees pinball machine results and clicks into one and ends up on location page.', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://pinballmap.com/api/v1/region/bend/location_machine_xrefs.json;no_details=1`, {
      statusCode: 200,
      fixture: 'sample.json'
    })
    cy.visit('http://localhost:3000/')
    cy.get("#cityInput").type('bend')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/results')
  })

  it('user should see a list of results on the page', () => {
    cy.get('.logo').contains('Pinball Connections')
    cy.get('.machine-container > h2').contains('Select a pinball machine below to find the address and a truth or dare challenge.')
  })

  it('there should be multiple machine cards with a name and a button to delete the card', () => {
    cy.get('.results-link').should('have.attr', 'href')
    cy.get(':nth-child(2) > :nth-child(2) > button').contains('Remove From List')
  })

  it('user deletes the first card out of the results and should then see one less card', () => {
    cy.get(':nth-child(2) > :nth-child(2) > button').click()
    cy.get(':nth-child(2) > :nth-child(1) > .results-link > h3')
    .contains('Funhouse')
  })
})


describe('user flow: sad path failed fetch', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://pinballmap.com/api/v1/region/bend/location_machine_xrefs.json;no_details=1`, {
      statusCode: 400,
      fixture: 'sample.json'
    })
    cy.visit('http://localhost:3000/')
    cy.get("#cityInput").type('bend')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/results')
  })

  it('the fetch doesnt work so error component should render', () => {
    cy.get('.logo').contains('Pinball Connections')
    cy.get('.error-container > h1').contains('Something went wrong... Error: 400')
  })
})