import { AlertPage } from "../../pages/Alert"

describe('ALERT', () => {   
        beforeEach(()=>{
            cy.visit(`${Cypress.env("herokuapp")}/javascript_alerts`);
        })
    it('Click for JS Alert', () => {
        AlertPage.jsAlert()
    })
    it('Click for JS Confirm OK', () => {
        AlertPage.jsConfirm() 
    });
    it('Click for JS Confirm FALSE', () => {
       AlertPage.jsConfirmFalse// AlertPage.   homework
    });
    it('Click for JS Promt OK/true', () => {
        AlertPage.jsPrompt()
        
    });
    it('Click for JS Promt OK/true', () => {
        cy.window().then($win =>{
          cy.stub($win,'prompt').returns('Hello World')
          cy.contains('button','Click for JS Prompt' ).click() 
        })
        cy.get('#result').should('have.text','You entered: Hello World')
    });
})