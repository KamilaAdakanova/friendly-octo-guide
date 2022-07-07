import signUpPage from "../../../support/pageObjects/signUpPage";
const email = signUpPage.generateEmail()
const password = signUpPage.generatePass(9);

describe('SIGN UP functionality', ()=>{
    before(()=>{
        cy.visit('/signup')
    })
    it('Sign up successfully', ()=>{
        signUpPage.headerSignUp().should("be.visible").should("have.text", "Sign Up");
        signUpPage.emailField().type(email, { delay: 15 });
        signUpPage.passField().type(password, { delay: 15 });
        signUpPage.signUpBtn().click();
        signUpPage.headerAfterSignUp().should("have.text", "Discover");
        signUpPage.logOut();
    })
    it("Attemp to SignUp a new user with existing credentials", () => {
        signUpPage.headerSignUp().should("be.visible").should("have.text", "Sign Up");
        signUpPage.emailField().type(email, { delay: 15 });
        signUpPage.passField().type(password, { delay: 15 });
        signUpPage.signUpBtn().click();
    })
})