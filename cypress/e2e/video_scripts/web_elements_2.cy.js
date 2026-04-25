describe('Cypress Test', () => {
  it('Navigate to Web Element Text1', () => {
    cy.once('uncaught:exception', () => false)

    cy.visit('https://www.admlucid.com')
    cy.contains('Tests').click()
    cy.contains('Web_Elements').click({ force: true })
    cy.get('#Text1').clear().type('Welcome to cypress testing')
  });

  it('Enter texts in TextArea', () => {
    cy.once('uncaught:exception', () => false)

    cy.visit('https://www.admlucid.com')
    cy.contains('Tests').click()
    cy.contains('Web_Elements').click({ force: true })
    cy.get('#TextArea1').clear().type('We call these action commands')
  });

  it('Click on Button1', () => {
    cy.once('uncaught:exception', () => false)
    cy.visit('/')
    cy.contains('Tests').click()
    cy.contains('Web_Elements').click({force:true})
    cy.get('#Button1').click()
  });

  it('Click on Choose file 3', () => {
    cy.once('uncaught:exception', () => false)
    cy.visit('/')
    cy.contains('Tests').click()
    cy.contains('Web_Elements').click({force:true})
    cy.get('.File3').click({force:true})
  })
})