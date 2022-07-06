import signUpPage from "../../support/pageObjects/signUpPage";
const email = signUpPage.generateEmail()
// describe('Main elements', ()=>{
//         before('Precondition',()=>{
//         cy.visit('signup')
//     })
//     it('should can type email', ()=>{
//
//         signUpPage.emailField().type(email).should('have.value', email)
//     })
//     // it('should can enter password', ()=>{
//     //     signUpPage.passField().type(email).should('have.value', email)
//     // })
//
// })

describe('SIGN UP functionality', ()=>{
    before(()=>{
        cy.visit('signup')
    })
    it('Sign up successfully', ()=>{
    signUpPage.headerSignUp().should("be.visible").should("have.text", "Sign Up");
    signUpPage.emailField().type(email).should("have.value", email);
    signUpPage.passField().type("123123zzz").should("have.value", "123123zzz");
    signUpPage.signUpBtn().click();
    signUpPage.headerAfterSignUp().should("have.text", "Discover");
    signUpPage.logOut();
    })
    it("Attemp to SignUp a new user with existing credentials", () => {
        signUpPage.headerSignUp().should("be.visible").should("have.text", "Sign Up");
        signUpPage.emailField().type(email).should("have.value", email);
        signUpPage.passField().type("123123zzz").should("have.value", "123123zzz");
        signUpPage.signUpBtn().click();
    })
})