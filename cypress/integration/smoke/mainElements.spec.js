import mainPage from "../../support/pageObjects/mainPage";
describe('SIGN UP', ()=>{
    before(()=>{
        cy.visit('')
    })
    it('sign up is visible', ()=>{
        mainPage.signUpBtn().should('be.visible')
    })
    it('sign up button has text', ()=>{
        mainPage.signUpBtn().should('have.text', 'Sign up')
    })
    it('sign up button redirects to SignUp Page', ()=>{
        mainPage.signUpBtn().click();
        cy.url().should('include', 'login').go('back');
    })
})

describe('LOGIN', ()=>{
    before(()=>{
        cy.visit('')
    })
    it('login is visible', ()=>{
        mainPage.loginBtn().should('be.visible')
    })
    it('login button has text', ()=>{
        mainPage.loginBtn().should('have.text', 'Log in')
    })
    it('login button redirects to Login Page', ()=>{
        mainPage.loginBtn().click();
        cy.url().should('include', 'login').go('back');
    })
})