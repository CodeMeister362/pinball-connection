describe('user flow: user starts on results page clicks on machine and then location card displays, and then clicks on back button', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://pinballmap.com/api/v1/region/bend/location_machine_xrefs.json;no_details=1`, {
      statusCode: 200,
      fixture: 'sample.json'
    })
    cy.visit('http://localhost:3000/')
    cy.get("#cityInput").type('bend')
    cy.get('button').click()
    cy.get(':nth-child(2) > :nth-child(1) > .results-link > h3').first().click()
  })

  it('user sees the pinball connections, name of place, address and a truth or dare challenge', () => {
    cy.get('.logo').contains('Pinball Connections')
    cy.get('.location > :nth-child(1) > h1').contains('Vector Volcano Classic Arcade')
    cy.get('.location > :nth-child(1) > :nth-child(2)').contains('111 NW Oregon Ave, Bend, OR')
    cy.get('h2').contains('Loser picks truth or dare.')
    cy.get(':nth-child(1) > div > :nth-child(2)')
  })

  it('user clicks on back button goes back to results page', () => {
    cy.get('button').contains('Back')
    cy.get('button').click()
    cy.url().should('eq', 'http://localhost:3000/results')
  })
})