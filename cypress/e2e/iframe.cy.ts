import { IFramePage } from "../../pages/Iframe"
import { IFrameAppPage } from '../../pages/IframeApp'

describe('IFRAME', () => {
    beforeEach(() => {
        IFramePage.visit()
    })
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })
    it('test iframe', () => {

        IFramePage.getIframe()
    });
}); describe.only('IFRAIMEAPP', () => {
    beforeEach(() => {
        IFrameAppPage.visit()
    })
    it('test iframe with extension', () => {
        cy.frameLoaded('#mce_0_ifr')
        cy.iframe('#mce_0_ifr').then(iframeApp => {
            cy.wrap(iframeApp).type("{selectAll}{del}").type('Hello World')//заберет все, удалит
            cy.wrap(iframeApp).clear().type('Hello Cypress!')// второй вариант
        })
    });
});