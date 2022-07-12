import mainPage from "../../../support/pageObjects/mainPage";

describe('Main Page - Main Page Elements and their base functionality Main Test Case', () => {

    describe('PRECONDITIONS: Load Main Page', () => {
        it('Visit Main Page and check that the page was loaded', () => {
            mainPage.load()
        });
        it ('Check redirecton of main links and buttons', ()=> {
            mainPage.redirect();
        })
    });

    describe('PRECONDITIONS: Load Main Page, type search item in search field', () => {
        it.skip('Visit Main Page and check Search functionality', () => {
            mainPage.search();
        });
    });
});