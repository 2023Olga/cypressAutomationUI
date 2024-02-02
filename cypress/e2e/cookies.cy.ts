import { LoginPage } from "../../pages/Login";
Cypress.session.clearAllSavedSessions()
describe('Cookies', () => {
  beforeEach(()=>{
    cy.session('myCurrentSession',()=>{
      cy.visit(`${Cypress.env("demoQA")}/login`);
//       cy.get('#userName').type('test');
//       cy.get('#password').type('Test1234*');
//       cy.contains('button','Login').click(); 
    
         LoginPage.submitButtonLogin()
        // cy.contains('Log out')
         cy.wait(2000) 
})
beforeEach(()=>{
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });

})
})  
  it('create cookies with cy.session', () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
    cy.url().then((url)=>{
     cy.url() 
    })  
  }); 
  it('create cookies with cy.session', () => {
    cy.visit(`${Cypress.env("demoQA")}/login`);
    cy.contains('Log out')  
  }); 
});
//Cypress.session.clearAllSavedSessions()