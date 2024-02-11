import { contains } from "cypress/types/jquery";

describe('ELEMENT TO BE VISIBLE',() => {
 it('Verify element to be visible', () => {
   cy.visit(Cypress.env('test'));
   cy.get('#visibility_trigger').should('be.visible').and('exist').click();
   cy.get('#visibility_target').should('be.visible').and('exist').click(); 
   cy.contains('.popover-body','I just removed my invisibility cloak!!')
   
 });
it('Verify element to be invisible', ()=>{
    cy.visit(Cypress.env('test'));
    cy.get('#invisibility_trigger').should('be.visible').and('exist').click();
    cy.contains('#spinner_gone', 'Thank God that spinner is gone!' );
})
it('Verify attribute to contain certain text',() =>{
    cy.visit(Cypress.env('test'))
    cy.get('#enabled_trigger').should('be.visible').and('exist'); 
    cy.get('#enabled_target').should('be.visible').and('exist');   
    cy.contains('#enabled_target','Disabled Button');
    cy.get('#enabled_trigger').should('have.text','Trigger').click();
    cy.contains('#enabled_target','Enabled Button').click()
    cy.contains('.popover-body','See, you just clicked me!!');
})
it('Verify the Page Title to change', () =>{
    cy.visit(Cypress.env('test'));
    cy.get('#page_title_trigger').should('be.visible').and('exist');
    cy.contains('#page_title_trigger', 'Trigger').click()
    cy.title().should('eq', 'My New Title!')
})
it.skip('Verify a text/value to have specific values', () => {   // !!!!!
    cy.visit(Cypress.env('test'))
    cy.get('#text_value_trigger').should('be.visible').and('exist');
    //cy.contains('#wait_for_value','placeholder=Creator of C');
    cy.get('#text_value_trigger').should('have.text','Trigger').click();
    cy.contains('#wait_for_value',"[placeholder='Dennis Ritchie']")
}) 
it('Verify alert to be present', () => {
    cy.visit(Cypress.env('test'))
    cy.contains('#alert_trigger','Show Alert').click()
    cy.on("window:alert",(text) => {
        expect(text).to.equal('I am alerting you!')
      })
    cy.on('window:confirm',() => true)
    cy.get('#alert_handled_badge').contains('Alert handled')
})
it('Verify prompt to be present', () => {
    cy.visit(Cypress.env('test'))
        cy.window().then($win =>{
            cy.stub($win,"prompt").returns('OK')//i'm waiting for
            cy.contains('#prompt_trigger','Show Prompt').click()
        })
            cy.get('#confirm_ok_badge').contains('OK')
    })

})