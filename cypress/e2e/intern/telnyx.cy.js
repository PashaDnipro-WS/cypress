describe('Telnyx Website UI Interaction Tests', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit("/")

        cy.get('#onetrust-accept-btn-handler', { timeout: 10000 })
            .should('be.visible')
            .click()
    })

    it('should display solution category cards in Solutions dropdown menu', () => {
        cy.contains('Solutions')
            .should('be.visible')
            .and('not.be.disabled')
            .click()

        cy.get('.w-full.col-span-8.grid')
            .should('be.visible')

        cy.xpath('//div[contains(@class, "w-full col-span-8")]//a[contains(@href, "solutions")]')
            .should('have.length', 4)
            .each(($el) => {
                cy.wrap($el)
                    .should('be.visible')
                    .and('not.be.disabled')
            })
    })

    it('should trigger animation after scrolling to section', () => {
        cy.checkAnimationAfterScroll('[aria-hidden="true"][style*="rotate"]')
    })

    it('should display Agent Execution & Memory content after selection', () => {
        cy.checkAnimationAfterScroll('[aria-hidden="true"][style*="rotate"]')
        cy.contains('button', 'Agent Execution & Memory')
            .should('be.visible')
            .click()

        cy.contains('Agent Execution & Memory')
            .should('be.visible')

        cy.contains('Real-time compute')
            .should('be.visible')

        cy.contains('AI-native orchestration')
            .should('be.visible')

        cy.contains('Storage and vertical systems')
            .should('be.visible')

        cy.contains('Observability, security, & economics')
            .should('be.visible')

        cy.contains('CONFIGURE AGENT')
            .should('be.visible')
            .and('not.be.disabled')

    })

    it('should activate selected model in Agent Runtime section', () => {
        cy.contains('AGENT RUNTIME').scrollIntoView()
            .should('be.visible')
        cy.get('[type = "button"][aria-pressed]')
            .should('have.length', 3)
            .each(($el) => {
                cy.wrap($el)
                    .should('be.visible')
                    .click()
                    .should('have.attr', 'aria-pressed', 'true')
            })
    })

    it('should activate circles in Voice Agent Builder', () => {
        cy.contains('Voice Agent Builder')
            .scrollIntoView()
            .should('be.visible')
            .click()

        cy.contains('BUILD YOUR AGENT')
            .should('be.visible')

        cy.get('button[aria-pressed]')
            .should('have.length', 12)
            .each(($button) => {
                cy.wrap($button)
                    .click()
                    .should('have.attr', 'aria-pressed', 'true')
            })
    })

    it('should allow selecting language from dropdown', () => {
        cy.get('[aria-label="Select language"]')
            .scrollIntoView()
            .should('be.visible')
            .click()

        cy.contains('[role="option"]', 'English')
            .click()

        cy.get('[aria-label="Select language"]')
            .should('contain', 'English')

    })

    it('should send message and display chat response', () => {
        cy.get('input[type="text"]')
            .type('I test u')

        cy.contains('SEND MESSAGE')
            .click()

        cy.get('div[class="bg-transparent"] p', { timeout: 10000 })
            .last()
            .invoke('text')
            .should('have.length.greaterThan', 10)
    })

    it('should submit Sign Up form with not valid test data', () => {
        cy.contains('Sign up')
            .click()
        cy.contains('Create your account')
            .should('be.visible')

        cy.fixture('user_data/sign_up').then((user) => {
            cy.fillSignupForm(user, {
                usePromo: true,
                acceptTerms: true,
                marketing: true
            })
        })

        cy.get('form[aria-label="signup-form"]')
            .find('p', { timeout: 10000 })
            .last()
            .should('be.visible')
            .invoke('text')
            .should('have.length.greaterThan', 10)
    })

    it('should navigate to Log In page and enter email', () => {
          cy.once('uncaught:exception', () => false)
        cy.get('a[href="https://portal.telnyx.com"]:visible')
            .invoke('removeAttr', 'target')
            .click()

        cy.fixture('user_data/log_in').then((user) => {
            cy.origin('https://portal.telnyx.com', { args: { user } }, ({ user }) => {
                cy.get('[autocomplete="username"]')
                    .should('be.visible')
                    .type(`${user.email}{enter}`)
            })
        })
    })

    it('should open floating chat widget and display response', () => {
        cy.get('button[class*="rounded-full"]', { includeShadowDom: true })
            .click()
        cy.get('#user-message-input', { includeShadowDom: true })
            .should('be.visible')
            .type('I test u')

        cy.get('.pb-1\\.5', { includeShadowDom: true })
            .find('p')
            .last()
            .should('be.visible')
            .invoke('text')
            .should('have.length.greaterThan', 10)
    })

    it('should contain valid ChatGPT external link', () => {
        cy.get('[alt="GPT"]')
            .parent('a')
            .should('have.attr', 'href')
            .and('include', 'chat.openai.com')
    })
})