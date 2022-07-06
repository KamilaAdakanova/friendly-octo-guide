import signUpPage from "../../../support/pageObjects/signUpPage";
const email = signUpPage.generateEmail()
describe('PAGE ELEMENTS AND THEIR BASE FUNCTIONALITY', ()=>{

    before('Precondition: open SignUp Page', () => {
        cy.visit('/signup')
    })
    describe('EMAIL', ()=>{
        it('Email field exists', ()=>{
            signUpPage.emailField().should("be.visible")
        })
        it('Email field has placeholder', ()=>{
            signUpPage.emailLabel().should('have.text', 'Email')
        })
        it('should can type email', ()=>{
        signUpPage.emailField().type(email).should('have.value', email)
        })

    })

    describe('PASSWORD', function () {
        it('Password field exists', ()=>{
            signUpPage.passField().should("be.visible")
        })
        it('Password field has placeholder', ()=>{
            signUpPage.passLabel().should('have.text', 'Password')
        })
    });

    describe('SIGNUP BTN', ()=>{
        it('SignUp button exists', ()=>{
            signUpPage.signUpBtn().should("be.visible")
        })
        it('Password field has placeholder', ()=>{
            signUpPage.passLabel().should('have.text', 'Password')
        })
    })


})