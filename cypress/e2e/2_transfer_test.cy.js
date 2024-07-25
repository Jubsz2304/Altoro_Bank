import logindatatest from '../fixtures/logindatatest.json'

describe('Scenario - Successfully transfer between accounts ', () => {

  describe('GIVEN the user are on the transfer screen', () => {
    beforeEach(() => {
      cy.visit('http://demo.testfire.net/login.jsp')
      cy.get('[id=uid]').type(logindatatest.username)
      cy.get('[id=passw]').type(logindatatest.password).type('{enter}')
      cy.get('#MenuHyperLink3').contains('Transfer Funds').click()
    })

    context('WHEN he selects the deposit account and type the value', () => {
      beforeEach(() => {

        cy.get('#fromAccount').should('exist').then(($el) => {
          console.log($el)
          cy.get('#toAccount').select('4539082039396288')
          cy.get('[id=transferAmount]').type('1200')
          cy.screenshot('transfer_test_screenshots/transfer_1_before_click.png')
        })
      })

      it('THEN the transfer is made', () => {
        cy.get('[id=transfer]').click()
        cy.get('[id=_ctl0__ctl0_Content_Main_postResp]').contains('transferred from Account 800002 into Account 4539082039396288')
        cy.screenshot('transfer_test_screenshots/transfer_2_after_click.png')
      })
    })
  })
})

