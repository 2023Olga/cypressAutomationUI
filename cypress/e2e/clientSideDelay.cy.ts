 
     describe('CLIENT SIDE DELAY', () => {
        it('test', () => {
         cy.visit('/clientdelay');
         cy.get('#ajaxButton').should('be.visible'). and('exist').click();
         cy.get('#spinner').should('be.visible').and('exist');
         cy.get('.bg-success').should('have.text','Data calculated on the client side.')
        });
     });

     //visit url
     //find button(selector)
     //assert button(проверка)
     //click button
     //find spinner element(selector)
     //verify spinner logo(assert)
     //assert appeared text