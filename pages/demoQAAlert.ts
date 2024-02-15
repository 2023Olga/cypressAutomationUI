class Alert {
    private alertTextButton: string = 'Click me';
    private buttonSelector: string = "#alertButton";
    private buttonTimeSelector: string = "#timerAlertButton";
    private resultPromptSelector: string = "#promptResult"
    private resultSelector: string = "#confirmResult"
    private buttonConfirmSelector: string = "#confirmButton"
    private jsAlertText: string = "You clicked a button";
    private jsAlertTimeText: string = "This alert appeared after 5 seconds"
    private jsConfirmText: string = "Do you confirm action?"
    private jsConfirmResultText: string = "You selected Ok"

    jsAlert() {
        cy.contains(this.buttonSelector, this.alertTextButton).click()
        cy.on("window:alert", (text) => {
            expect(text).to.equal(this.jsAlertText)
        })
        // cy.on('window:confirm',() => true)
        //cy.get(this.resultSelector).should(hav)
    }
    jsTimeAlert() {
        cy.contains(this.buttonTimeSelector, this.alertTextButton).click()
        cy.on("window:alert", (text) => {
            expect(text).to.equal(this.jsAlertTimeText)

        })
    }
    jsConfirm() {
        cy.contains(this.buttonConfirmSelector, this.alertTextButton).click()
        cy.on("window:alert", (text) => {
            expect(text).to.equal(this.jsConfirmText)
        })
        cy.on('window:confirm', () => true)
        cy.get(this.resultSelector).should('have.text', this.jsConfirmResultText)
    }
    jsPrompt() {
        const text = "Hello World"
        cy.window().then($win => {
            cy.stub($win, "prompt").returns(text)//i'm waiting for
            cy.contains(this.alertTextButton).click()
        })
        //cy.get(this.resultPromptSelector).should('have.text',"You entered Hello World")
        // cy.contains(this.resultPromptSelector,text)
        cy.window().its('prompt').should('be.called')
        cy.window().its('prompt').should('be.calledOnce')
        cy.get(this.resultPromptSelector).should('include.text', text)
        
    }
}

export const AlertsPage = new Alert()