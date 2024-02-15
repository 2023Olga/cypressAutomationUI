import { AlertsPage } from "../../pages/demoQAAlert"

describe('ALERTS ON DEMOQA', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/alerts`)
    })
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
    })
    it('Alert', () => {
        AlertsPage.jsAlert()
    });
    it('Alert after 5 seconds', () => {
        AlertsPage.jsTimeAlert()
    });
    it('Click for JS Confirm OK', () => {
        AlertsPage.jsConfirm()
    });
    it.only('Click for JS Promt OK/true', () => {
        AlertsPage.jsPrompt()
        
    });
});