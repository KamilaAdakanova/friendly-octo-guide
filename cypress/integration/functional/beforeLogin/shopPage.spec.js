import shopPage from "../../../support/pageObjects/shopPage";

describe('SHOP PAGE - Shop Page Elements and their base functionality, PRECONDITIONS: Load SHOP Page', ()=>{

    it('Visit Shop Page and check that the page was loaded', () =>{
        shopPage.load();
    })

    it('Parsing data from categories and comparing results with expected array', () =>{
        shopPage.parseData();
    })

    it('Parsing data from categories and comparing results with expected array, only text', () =>{
        shopPage.parseDataAd();
    })

    it('Checking that each link is clickable and redirects user to a correct page', () =>{
        shopPage.redirect();
    })
})