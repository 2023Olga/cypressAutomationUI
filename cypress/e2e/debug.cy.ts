
describe('Login Page', () => {
    beforeEach(() => {
        cy.visit(
        {
            url:'click',
            method:'GET'
        }   
        )
    })
    it('debug', () => {
cy.get('#badButton').debug().click()
    })
    it.only('Pause', () => {
       cy.pause()
       cy.get('#badButton').click()
       cy.pause()
       cy.get('#badButton').should("have.css","background-color",'rgb(40, 167, 69)')
})
})