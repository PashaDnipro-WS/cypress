describe('internship task1 - cypress: testing of site telnyx', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080)
        cy.visit('/')

        cy.get('#onetrust-accept-btn-handler', { timeout: 10000 })
            .should('be.visible')
            .click()
    })

    it('1 - nav bar: solutions', () => {
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

    it('2 - animation', () => {
        cy.checkAnimationAfterScroll('[aria-hidden="true"][style*="rotate"]')
    })

    it('3 - animation "6-9"', () => {
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

    it('4 - AGENT RUNTIME: focused models', () => {
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

    it('4.1 - Voice Agent Builder: circles', () => {
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

    it('5 - AGENT RUNTIME: select language', () => {
        cy.get('[aria-label="Select language"]')
            .scrollIntoView()
            .should('be.visible')
            .click()

        cy.contains('[role="option"]', 'English')
            .click()

        cy.get('[aria-label="Select language"]')
            .should('contain', 'English')

    })

    it('6 - AGENT RUNTIME: input field', () => {
        cy.get('input[type="text"]')
            .type('I test u')

        cy.contains('SEND MESSAGE')
            .click()

        cy.get('div[class="bg-transparent"] p', { timeout: 10000 })
            .last()
            .invoke('text')
            .should('have.length.greaterThan', 10)
    })

    it('8 - SIGN UP', () => {
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
            .find('p')
            .last()
            .should('be.visible')
            .invoke('text')
            .should('have.length.greaterThan', 10)
    })

    it('9 - LOG IN', () => {
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

    it('10 - down button', () => {
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

    it('7 - Ask AI: ChatGPT', () => {
        cy.get('[alt="GPT"]')
            .parent('a')
            .should('have.attr', 'href')
            .and('include', 'chat.openai.com')
    })
})