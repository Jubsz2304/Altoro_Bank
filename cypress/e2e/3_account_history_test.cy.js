import logindatatest from '../fixtures/logindatatest.json'

describe('Scenario - Successfully account history', () => {

  describe('GIVEN the user are on the accounts screen', () => {
    beforeEach(() => {
      cy.visit('http://demo.testfire.net/login.jsp')
      cy.get('[id=uid]').type(logindatatest.username)
      cy.get('[id=passw]').type(logindatatest.password).type('{enter}')
      cy.get('[id=btnGetAccount]').click()


    })
    context('WHEN he selects view accounts details', () => {
      beforeEach(() => {
        cy.get('div.fl[style="width: 99%;"]').within(() => {
          cy.get('h1').should('contain.text', 'Account History')
          cy.screenshot('account_history_test_screenshots/account_history_1_before_click.png')
          cy.get('#listAccounts').select('4539082039396288')
          cy.get('[id=btnGetAccount]').click()

        })
      })
      it('THEN account history is showed', () => {
        cy.get('div.fl[style="width: 99%;"]').within(() => {
          cy.get('h1').should('contain.text', 'Account History - 4539082039396288 Credit Card')
          cy.screenshot('account_history_test_screenshots/account_history_2_after_click.png')
        })
      })
    })
  })
})


