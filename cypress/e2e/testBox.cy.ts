describe("Test testBox",() => {
    it("test",() => {
     cy.visit('https://uitestingplayground.com/textinput')
     cy.get('#newButtonName').type('Hello World')
     cy.get('#updatingButton').click()
     cy.contains('button','Hello World')
     cy.get('#updatingButton').should('have.text','Hello World')
     cy.get('#updatingButton').then(Element =>{
        expect(Element.text()).to.equal('Hello World')
     })
     
    })
})