import mainPageTestData from '../../fixtures/mainPageTestData'
export default new class MainPage{
    //SELECTORS
    pageTitle = () => cy.get('div h1');
    pageText = () => cy.get('div.d-flex div.text-body-body1-sofiapro');
    signUpBtn = () => cy.get('a[href="/signup"]');
    loginBtn = () => cy.get('a[href="/login"]');
    discoverLink = ()=> cy.get('a[href="/home"]>span').first();
    shopLink = ()=> cy.get('a[href="/categories"]>span');
    favoritesLink =()=> cy.get('a[href="/account/favorites/products"]');
    dealsLink =()=> cy.get('button[role="button"]>span');

    //METHODS
    //Load Home Page (and check that the Home page was loaded: checking Page Title and Page Text)
    load = () => {
        cy.visit('/').location('pathname').should('eq', '/');
        this.pageTitle().should('be.visible').should('have.text', mainPageTestData.default.pageTitle);
        this.pageText().should("be.visible").should('have.text', mainPageTestData.default.pageText);
        this.signUpBtn().should('be.visible').should('have.text', mainPageTestData.default.signUpBtn);
        this.loginBtn().should('be.visible').should('have.text', mainPageTestData.default.logInBtn);
        this.discoverLink().should('be.visible').should('have.text', mainPageTestData.default.discoverLink);
        this.shopLink().should('be.visible').should('have.text', mainPageTestData.default.shopLink);
        this.favoritesLink().should('be.visible').should('have.text', mainPageTestData.default.favoritesLink);
        this.dealsLink().should('be.visible').should('have.text', mainPageTestData.default.deals);


    }



}