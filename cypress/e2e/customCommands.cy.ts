
describe('Login Page',() =>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env("demoQA")}/login`);
    })
      it('login',() =>{
        // cy.get('#userName').type('test');
        // cy.get('#password').type('Test1234*');
        // cy.contains('button','Login').click();
        // cy.get('#login').click()// the same as contains
        cy.login('test','Test1234*')
        cy.contains('Log out')   
      });
      it('login with PageObject',() =>{
        
        cy.contains('Log out')  
   })
  }) 