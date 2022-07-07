import signUpPage from "../../../support/pageObjects/signUpPage";
import loginPage from "../../../support/pageObjects/loginPage";
const email = signUpPage.generateEmail();
const password = signUpPage.generatePass(9);
describe('PAGE ELEMENTS AND THEIR BASE FUNCTIONALITY', ()=>{

    beforeEach('Precondition: open SignUp Page', () => {
        cy.visit('/signup')
    });
    describe('EMAIL', ()=>{
        it('Email field should exist', ()=>{
            signUpPage.emailField().should("be.visible")
        })
        it('Email field should have a placeholder', ()=>{
            signUpPage.emailLabel().should('have.text', 'Email')
        })
        it('Email error field should have a placeholder', ()=>{
            signUpPage.emailErrorMsg().should('have.text', 'Enter a valid email')
        })
        it('Should can type email', ()=>{
        signUpPage.emailField().type(email).should('have.value', email)
        })
        it('Can not sign up with invalid email', ()=>{
            signUpPage.emailField().type(password, { delay: 15 });
            signUpPage.passField().type(password, { delay: 15 });
            signUpPage.signUpBtn().click();
            cy.url().should('include', 'login');
        })
    });

    describe('PASSWORD', function () {
        it('Password field should exist', ()=>{
            signUpPage.passField().should("be.visible")
        })
        it('Password field should have a placeholder', ()=>{
            signUpPage.passLabel().should('have.text', 'Password')
        })
        it('Password error field should have a placeholder', ()=>{
            signUpPage.passErrorMsg().should('have.text', 'Minimum of 8 characters')
        })
        it('Should can type password', ()=>{
            signUpPage.passField().type(password, { delay: 15 }).should('have.value', password)
        })
        it('Can not sign up with invalid password', ()=>{
            const invalidPass = signUpPage.generatePass(4)
            signUpPage.passField().clear().type(invalidPass);
            signUpPage.signUpBtn().click();
            cy.url().should('include', 'login');
        })
    });

    describe('SIGNUP BTN', ()=>{
        it('SignUp button should exist', ()=>{
            signUpPage.signUpBtn().should("be.visible")
        })
        it('Password field should have placeholder', ()=>{
            signUpPage.signUpBtn().should('have.text', 'sign up to begin shopping')
        })
    });

    describe('HEADERS', ()=>{
        it('Main header should have correct text', ()=>{
            signUpPage.headerSignUp().should('have.text', 'Sign Up');
        })
        it('Second header should have correct text', ()=>{
            signUpPage.header2().should('have.text', 'Discover the new way to shop fashion, home, beauty, and more from trusted LTK Creators.');
        })
    })

    describe('LOGIN REF', ()=>{
        it('Login ref should exist', ()=>{
            signUpPage.loginRef().should("be.visible")
        })
        it('Login ref should have text', ()=>{
            signUpPage.loginRef().should('have.text', 'Log in')
        })
        it('Login ref should redirect to Login page', ()=>{
            signUpPage.loginRef().click();
            loginPage.headerLogIn().should('have.text', 'Log In')
        })
    });
});