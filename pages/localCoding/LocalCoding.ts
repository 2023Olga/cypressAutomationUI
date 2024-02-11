class LocalCodingLogin {
    email: string = '#normal_login_email';
    password: string = '#normal_login_password';
    loginButton: string ='button[type="submit"]';

    submitLogin(email:string,password:string):void {

        cy.get(this.email).type(email);
        cy.get(this.password).type(password,{log:false});//password isn't visible
        cy.get(this.loginButton).click();
    }
    
}
export const LocCodingLogin = new LocalCodingLogin()