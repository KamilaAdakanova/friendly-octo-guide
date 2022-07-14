import signUpPage from "../../../support/pageObjects/signUpPage";
import localHelper from "../../../support/localHelper";
const email = signUpPage.generateEmail()
const password = localHelper.generateRandomPassword(30)

describe('SIGN UP functionality', ()=>{
    beforeEach(()=>{
        cy.visit('/signup')
    })
    it('Sign up successfully', ()=>{
        signUpPage.headerSignUp().should("be.visible").should("have.text", "Sign Up");
        signUpPage.emailField().type(email, { delay: 15 });
        signUpPage.passField().type(password, { delay: 15 });
        signUpPage.signUpBtn().click().wait(200);
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