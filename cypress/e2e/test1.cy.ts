import { contains } from "cypress/types/jquery";

describe('ELEMENT TO BE VISIBLE',() => {
 it('element to be visible', () => {
   cy.visit(Cypress.env('test'));
   cy.get('#visibility_trigger').should('be.visible').and('exist').click();
   cy.get('#visibility_target').should('be.visible').and('exist').click(); 
   cy.contains('.popover-body','I just removed my invisibility cloak!!')
   
 });
it('Element to be invisible', ()=>{
    cy.visit(Cypress.env('test'));
    cy.get('#invisibility_trigger').should('be.visible').and('exist').click();
    cy.contains('#spinner_gone', 'Thank God that spinner is gone!' );
})
it('attribute to contain certain text',() =>{
    cy.visit(Cypress.env('test'))
    cy.get('#enabled_trigger').should('be.visible').and('exist'); 
    cy.get('#enabled_target').should('be.visible').and('exist');   
    cy.contains('#enabled_target','Disabled Button');
    cy.get('#enabled_trigger').should('have.text','Trigger').click();
    cy.contains('#enabled_target','Enabled Button').click()
    cy.contains('.popover-body','See, you just clicked me!!');
})
it.only('Wait for Page Title to change', () =>{
    cy.visit(Cypress.env('test'));
    cy.get('#page_title_trigger').should('be.visible').and('exist');
    cy.contains('#page_title_trigger', 'Trigger').click()
    cy.title().should('eq', 'My New Title!')
}) 
});