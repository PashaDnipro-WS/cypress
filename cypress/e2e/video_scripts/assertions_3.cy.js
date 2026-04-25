describe('Cypress Test', () => {

  it('Navigate to web elements and assert them using should', () => {
    cy.once('uncaught:exception', () => false)

    cy.visit('/')
    cy.contains('Tests').click()
    cy.contains('Web_Elements').click({ force: true })

    cy.get('h1').contains('Web Elements and Locators')

    cy.get('h1')
      .should('have.text', 'Web Elements and Locators')

    cy.get('.Submit3')
      .should('have.value', 'submit 3')
      .click()

    cy.get('#Submit1')
      .should('have.value', 'submit 1')
      .click()
  })

  it('Navigate to golf and assert them using should', () => {
    cy.once('uncaught:exception', () => false)

    cy.visit('/')
    cy.contains('Tests').click()
    cy.contains('Golf_Course').click({ force: true })

    // dropdown має 11 options
    cy.get('.select')
      .find('option')
      .should('have.length', 11)

    // кнопка visible
    cy.get('.btn')
      .first()
      .should('be.visible')
      .click()
  })

  it('Navigate to web elements and assert them using expect', () => {
    cy.once('uncaught:exception', () => false)

    cy.visit('/')
    cy.contains('Tests').click()
    cy.contains('Web_Elements').click({ force: true })

    // contains text
    cy.get('h1').then(($el) => {
      expect($el.text()).to.equal('Web Elements and Locators')
    })

    cy.get('h2').then(($el) => {
      expect($el.text()).to.contain('CHILD CARE REGISTRATION')
    })

    // button / checkbox state
    cy.get('#Button1').then(($el) => {
      expect($el).to.be.visible
    })
  })

})