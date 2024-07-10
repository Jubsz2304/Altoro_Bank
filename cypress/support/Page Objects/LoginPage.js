import username from '../fixtures/logindatatest.json';
import password from '../fixtures/logindatatest.json';

class LoginPage {
    visit () {
        cy.visit('http://demo.testfire.net/login.jsp');
    
    }
    
    fillUsername(username) {
        cy.getById('uid').type(username);
    }

    fillPassword(password) {
        cy.getById('passw').type(password)
    }
}