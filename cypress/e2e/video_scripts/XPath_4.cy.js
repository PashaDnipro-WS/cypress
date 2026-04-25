describe('check if XPath works', () => {
    it('should just check if any XPath works', () => {
        cy.visit('https://telnyx.com/')
        cy.xpath('//div[@class="grid grid-cols-1 grid-rows-1"]//*[@role="columnheader"][5]//img')
            .scrollIntoView()
            .should('exist')
            .and('have.attr', 'alt', 'Vapi logo')
    })
})

