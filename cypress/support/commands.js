// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('checkAnimationAfterScroll', (selector, scrollY = 1600) => {
  cy.get(selector)
    .first()
    .then(($el) => {
      const beforeTransform = getComputedStyle($el[0]).transform

      cy.scrollTo(0, scrollY)
      cy.wait(1000)

      cy.get(selector)
        .first()
        .should(($elAfter) => {
          const afterTransform = getComputedStyle($elAfter[0]).transform

          expect(afterTransform).to.not.equal(beforeTransform)
        })
    })
})

Cypress.Commands.add('fillSignupForm', (user, options = {}) => {

  cy.get('#sign-up-email').type(user.companyEmail)
  cy.get('#sign-up-first-name').type(user.firstName)
  cy.get('#sign-up-last-name').type(user.lastName)
  cy.get('#sign-up-password').type(user.password)

  if (options.usePromo) {
    cy.contains('Apply a promo code').click()
    cy.get('#sign-up-promo-code').type(user.promoCode)
  }

  if (options.acceptTerms) {
    cy.get('#sign-up-terms').check()
  }

  if (options.marketing) {
    cy.get('#sign-up-marketing').check()
  }

  cy.get('button:has([data-content="Signup"])').click()
})