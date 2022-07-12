import shopPage from "../../../support/pageObjects/shopPage";
describe('SHOP PAGE', ()=>{
    let styles = ['Summer Fashion', 'Baby', 'Beauty', 'Brasil', 'Bump', 'Curves', 'Europe', 'Family', 'Fitness', 'Home', 'It Bags',
        'Kids', 'Mens', 'Shoe Crushes', 'Style Tips', 'Swim', 'Travel', 'Weddings', 'Workwear'];
    let expectedResult = [
        {
            "text": "Summer Fashion",
            "endPoint": "/categories/seasonal"
        },
        {
            "text": "Baby",
            "endPoint": "/categories/baby"
        },
        {
            "text": "Beauty",
            "endPoint": "/categories/beauty"
        },
        {
            "text": "Brasil",
            "endPoint": "/categories/brasil"
        },
        {
            "text": "Bump",
            "endPoint": "/categories/bump"
        },
        {
            "text": "Curves",
            "endPoint": "/categories/curves"
        },
        {
            "text": "Europe",
            "endPoint": "/categories/europe"
        },
        {
            "text": "Family",
            "endPoint": "/categories/family"
        },
        {
            "text": "Fitness",
            "endPoint": "/categories/fit"
        },
        {
            "text": "Home",
            "endPoint": "/categories/home"
        },
        {
            "text": "It Bags",
            "endPoint": "/categories/itbag"
        },
        {
            "text": "Kids",
            "endPoint": "/categories/kids"
        },
        {
            "text": "Mens",
            "endPoint": "/categories/mens"
        },
        {
            "text": "Shoe Crushes",
            "endPoint": "/categories/shoecrush"
        },
        {
            "text": "Style Tips",
            "endPoint": "/categories/styletip"
        },
        {
            "text": "Swim",
            "endPoint": "/categories/swim"
        },
        {
            "text": "Travel",
            "endPoint": "/categories/travel"
        },
        {
            "text": "Weddings",
            "endPoint": "/categories/wedding"
        },
        {
            "text": "Workwear",
            "endPoint": "/categories/workwear"
        }
    ];
    it('', ()=>{
        cy.visit('/categories');
        let actualRes = [];
        cy.get('.ma-0.text-subtitle-subtitle1-sofiapro').invoke('text').then((styles)=>{
            console.log(styles);

        })
        cy.get('.ma-0.text-subtitle-subtitle1-sofiapro')
        let styles = ['Summer Fashion', 'Baby', 'Beauty', 'Brasil', 'Bump', 'Curves', 'Europe', 'Family', 'Fitness', 'Home', 'It Bags',
            'Kids', 'Mens', 'Shoe Crushes', 'Style Tips', 'Swim', 'Travel', 'Weddings', 'Workwear'];
        styles.forEach((el,i)=>{
            cy.get('.ma-0.text-subtitle-subtitle1-sofiapro').eq(i)
                .should('have.text', el).then(()=>{
                console.log(el)
            })
        })
    })
    it('', ()=>{
        let actualRes = [];
        cy.visit('/categories');
        cy.get('div[xs="12"]>div.row').children('div').should('have.length', expectedResult.length)
            .each((el)=>{
                let text = el[0].innerText;
                let endPoint = el[0].innerHTML.split('"')[1]
                actualRes.push({text,endPoint})
                    cy.wrap(el).click().wait(500).go('back')
                if(actualRes.length === expectedResult.length){
                    console.log(actualRes)
                    expect(actualRes).deep.eq(expectedResult)
                }

            })

    })
    it.only('should redirect', ()=>{
        cy.visit('/categories');

        expectedResult.forEach((el)=>{
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


    })

})

