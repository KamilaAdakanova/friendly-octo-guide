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
    searchField =()=> cy.get('#input-171');

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
        this.searchField().should('have.attr', 'placeholder', mainPageTestData.default.searchField);
    }
    redirect = () => {
        cy.visit('/').location('pathname').should('eq', '/');
        this.discoverLink().click();
        cy.url().should('include', mainPageTestData.discover.pathname);
        cy.get(mainPageTestData.discover.selector).should('have.text', mainPageTestData.discover.text);
        cy.visit('/').location('pathname').should('eq', '/');
        this.shopLink().click();
        cy.location('pathname').should('eq', mainPageTestData.shop.pathname);
        cy.get(mainPageTestData.shop.selector).should('have.text', mainPageTestData.shop.text);
        cy.visit('/').location('pathname').should('eq', '/');
        this.signUpBtn().click();
        cy.url().should('include', mainPageTestData.signIn.pathname);
        cy.get(mainPageTestData.signIn.selector).should('have.text', mainPageTestData.signIn.text);
        cy.visit('/').location('pathname').should('eq', '/');
        this.loginBtn().click();
        cy.url().should('include', mainPageTestData.logIn.pathname);
        cy.get(mainPageTestData.logIn.selector).should('have.text', mainPageTestData.logIn.text);
    }

    search = ()=>{
        cy.visit('/').location('pathname').should('eq', '/');
        this.searchField().type('black dress{enter}', {force: true});
        cy.title().should('eq', 'Shop "black dress" on LTK');
    }



}