class TextBox{
    fullName: string ='#userName'
    email: string = '#userEmail'
    currentAddress: string = '#currentAddress'
    permanentAddress: string = '#permanentAddress'
    buttonSubmit: string = '#submit'

    submitButtonTextBox(){
        cy.get(this.fullName).type('Jana Smith');
        cy.get(this.email).type('asdf@gmail.com');
        cy.get(this.currentAddress).type('NY,New York');
        cy.get(this.permanentAddress).type('Brooklyn');
        cy.get(this.buttonSubmit).click();
    }
}
export const TextBoxPage = new TextBox()