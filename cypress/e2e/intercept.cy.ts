describe('INTERCEPT',( ) =>  {
  it('network request spy', function () {
    cy.fixture("progress.json").as("data");//this
    cy.intercept('POST', '*/login').as('login')//const login = cy.intercept('POST', '*/login')
    cy.intercept('https://server-stage.pasv.us/course/coursesProgress/65c3c18004369c018a3589b7',
      { fixture: "progress.json" }
    ).as('course');
    cy.visit(`${Cypress.env('stage')}/user/login`)//get zapros
    cy.get('#normal_login_email').type(Cypress.env('email'))
    cy.get('#normal_login_password').type(Cypress.env('password'), { log: false })
    cy.get('button[ type="submit"]').click()
    cy.wait('@login').then(wholeResponce => {
      console.log(wholeResponce, 'res')
      let id = wholeResponce.response.body.payload.user._id
      cy.location().should((loc) => {
        console.log(loc, 'loc')
        expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`)
        expect(wholeResponce.response.statusCode).to.eq(200)
      })
    })
    cy.visit('https://stage.pasv.us/profile/65c3c18004369c018a3589b7/progress')
    cy.wait('@course').then(el => {
      console.log(el, 'response')
      cy.wrap(this.data).should('deep.equal', el.response.body)
    })
  });
});