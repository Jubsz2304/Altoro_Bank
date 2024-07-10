//import LoginPage from '../support/Page Objects/LoginPage';
import logindatatest from '../fixtures/logindatatest.json'

describe('Scenario 1- Successfully login when the user puts the email and password correctly', () => { //Sucesso
  beforeEach(() => {
    cy.visit('http://demo.testfire.net/login.jsp')
  })
  context('GIVEN user is on the login screen', () => {
    context('WHEN he puts the email AND password correctly AND clicks on "Entrar" button', () => {
      beforeEach(() => {
        cy.get('[id=uid]').type(logindatatest.username);
        cy.get('[id=passw]').type(logindatatest.password).type('{enter}');
      })

      it('THEN he must be directed to the Main page', () => {
        cy.get('[id=AccountLink]');
        cy.get('div.fl[style="width: 99%;"]').within(() => {
          cy.get('h1').should('contain.text', logindatatest.name);
          cy.get('p').should('contain.text', logindatatest.welcomemessage);
        })
      })
    })
  })
})