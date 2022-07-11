import mainPage from "../../support/pageObjects/mainPage";
import mainPageTestData from '../../fixtures/mainPageTestData'
describe('SIGN UP', ()=>{
    before(()=>{
        cy.visit('/')
    })
    it('sign up is visible', ()=>{
        mainPage.signUpBtn().should('be.visible')
    })
    it('sign up button has text', ()=>{
        mainPage.signUpBtn().should('have.text', mainPageTestData.default.signUpBtn)
    })
    it('sign up button redirects to SignUp Page', ()=>{
        mainPage.signUpBtn().click();
        cy.url().should('include', 'login').go('back');
    })
})

describe('LOGIN', ()=>{
    before(()=>{
        cy.visit('/')
    })
    it('login is visible', ()=>{
        mainPage.loginBtn().should('be.visible')
    })
    it('login button has text', ()=>{
        mainPage.loginBtn().should('have.text', mainPageTestData.default.logInBtn)
    })
    it('login button redirects to Login Page', ()=>{
        mainPage.loginBtn().click();
        cy.url().should('include', 'login').go('back');
    })
})

describe('DISCOVER', ()=>{
    before(()=>{
        cy.visit('/')
    })
    it('discover is visible', ()=>{
        mainPage.discoverLink().should('be.visible')
    })
    it('discover link has text', ()=>{
        mainPage.discoverLink().should('have.text', mainPageTestData.default.discoverLink)
    })
    it('discover link redirects to Login Page', ()=>{
        mainPage.loginBtn().click();
        cy.url().should('include', 'login').go('back');
    })
})

describe('SHOP', ()=>{
    before(()=>{
        cy.visit('/')
    })
    it('discover is visible', ()=>{
        mainPage.shopLink().should('be.visible')
    })
    it('discover link has text', ()=>{
        mainPage.shopLink().should('have.text', mainPageTestData.default.shopLink)
    })
    it('discover link redirects to Login Page', ()=>{
        mainPage.loginBtn().click();
        cy.url().should('include', 'login').go('back');
    })
})

describe('Main Page - Main Page Elements and their base functionality Main Test Case', () => {
    describe('PRECONDITIONS: Load Main Page', () => {
        it.only('Visit Main Page and check that the page was loaded', () => {
            mainPage.load()
        });
    });
});