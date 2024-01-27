describe('ENV', () => {
    it('stage', () => {
    cy.visit(Cypress.env('stage'));
        
    });
    it('prod', () => {
        cy.visit(Cypress.env('prod'));    
    });
    it('tekst', () => {
        cy.log(Cypress.env('tekst'));      
    });
    it('baseUrl', () => {
        cy.visit('/');      
    });
    it('test', () => {
        cy.visit(Cypress.env('test'));      
    });
});