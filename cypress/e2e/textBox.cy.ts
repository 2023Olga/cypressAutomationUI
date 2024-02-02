import {TextBoxPage} from '../../pages/TextBox'
describe('Text Box', () => {
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/text-box`)
    })
    it('text box', () => {
     cy.get('#userName').type('Jana Smith')
     cy.get('#userEmail').type('asdf@gmail.com')
     cy.get('#currentAddress').type('NY,New York')
     cy.get('#permanentAddress').type('Brooklyn')
     //cy.get('#submit').click()
     cy.contains('Submit').click()    
    });
    it.only('TextBox with PageObject', () => {
      TextBoxPage.submitButtonTextBox()
      cy.contains('Submit')
      cy.get('#name').should('have.text','Name:Jana Smith')
      cy.get('#email').should('have.text','Email:asdf@gmail.com') 
      cy.get('#currentAddress.mb-1').should('include.text','Current Address :NY,New York') 
      cy.get('#permanentAddress.mb-1').should('include.text','Permananet Address :Brooklyn')   
    });
});