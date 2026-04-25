describe('cypress test', () => {
    it('navigate to adm lucid', () => {
        cy.visit('/')
        cy.url().should('contain', 'admlucid')
        cy.title().should('eq', 'Home Page - Admlucid')
    });
    it('Login adm lucid', () => {
        cy.login('example@gmail.com','1234')
    })
})