describe('Search elemnts', ()=>{

    beforeEach(()=>{
        cy.visit('/books');
    });

    it ('Search for element with multiple results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('java');
            cy.get(index.searchButton).click();
        });
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.allElemTitle).should('contain','Java');
        });

    });

    it ('Search for element without results', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('kk');
            cy.get(index.searchButton).click();
        });
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.noResultAd).should('contain','No rows found');
        });
        

    });

})