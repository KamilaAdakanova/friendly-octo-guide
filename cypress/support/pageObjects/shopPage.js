const { shopPageExpectedResult, shopPageTestData} = require('../../fixtures/shopPageTestData');
export default new class ShopPage {
    //SELECTORS
    header = () => cy.get('div h2');
    paragraph = () => cy.get('div>p');

    //METHODS
    //Load Shop Page (and check that the Shop page was loaded: checking Text of header and paragraph)
    load = () =>{
        cy.visit('/categories');
        this.header().should('be.visible').should('have.text', shopPageTestData.headerText);
        this.paragraph().should('be.visible').should('have.text', shopPageTestData.paragraphText);
    }
    //Load Shop Page, parsing data from categories and comparing results with expected array: checking Text and EndPoint)
    parseData = ()=>{
        let actualRes = [];
        cy.visit('/categories');
        cy.get('div[xs="12"]>div.row').children('div').should('have.length', shopPageExpectedResult.length)
            .each((el)=>{
                let text = el[0].innerText;
                let endPoint = el[0].innerHTML.split('"')[1]
                actualRes.push({text,endPoint})
                // cy.wrap(el).click().wait(500).go('back')
                if(actualRes.length === shopPageExpectedResult.length){
                    //console.log(actualRes)//in order to print actual result
                    expect(actualRes).deep.eq(shopPageExpectedResult)
                }
            })
    }
    //Parsing data additional and comparing results with expected array: checking Text
    parseDataAd = ()=>{
        cy.visit('/categories');
        cy.get('.ma-0.text-subtitle-subtitle1-sofiapro').invoke('text').then((styles)=>{
            console.log(styles);// to print expected result
        })
        let styles = ['Summer Fashion', 'Baby', 'Beauty', 'Brasil', 'Bump', 'Curves', 'Europe', 'Family', 'Fitness', 'Home', 'It Bags',
            'Kids', 'Mens', 'Shoe Crushes', 'Style Tips', 'Swim', 'Travel', 'Weddings', 'Workwear'];
        styles.forEach((el,i)=>{
            cy.get('.ma-0.text-subtitle-subtitle1-sofiapro').eq(i)
                .should('have.text', el).then(()=>{
                console.log(el)// to print actual result
            })
        })
    }

    //Load Shop Page, checking that each link is clickable and redirects user to a correct page: checking Url, Page Title, Header)
    redirect = () =>{
        cy.visit('/categories');
        shopPageExpectedResult.forEach((el)=>{
            let endPointArray = el.endPoint.split('/');
            let endPointTitle = endPointArray[endPointArray.length - 1]
            cy.get(`[href="${el.endPoint}"]`).click().wait(1000)
            cy.location('pathname').should('eq', el.endPoint)
            cy.title().should('eq', `Shop curated ${endPointTitle} products on LTK`)
            if(el.text === "Summer Fashion"){
                cy.get('div h2').should('have.text', `LTK Summer Trends`)
            } else {
                cy.get('div h2').should('have.text', `LTK ${el.text}`)
            }
            cy.visit('/categories');
        })
    }
}