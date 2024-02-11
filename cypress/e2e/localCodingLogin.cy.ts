import {LocCodingLogin} from "../../pages/localCoding/LocalCoding";

describe('LOGIN ', () => {
   beforeEach(() =>{
   cy.session('myCurrentSession',()=>{
   cy.visit(`${Cypress.env('stage')}/user/login`)
    LocCodingLogin.submitLogin(Cypress.env('email'),Cypress.env('password'))
   }) 
})
    it('login Page', () => {
        cy.visit(`${Cypress.env('stage')}/course`) 
    });
})
