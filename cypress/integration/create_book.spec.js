const { random } = require('faker');

const DEFAULT_TIMEOUT = 500;

const testData = {
    name: `e2e book name ${random.words(2)}`,
    author: `e2e author name ${random.words(2)}`
};

describe('Should create book succesfully', () => {

    before(() =>{
        cy.visit('https://books-frontend-lhincapie0.herokuapp.com/');
        cy.get('[data-test-id="add-btn"').click();
        cy.wait(DEFAULT_TIMEOUT);
        cy.get('[data-test-id="name-input"').type(testData.name);
        cy.wait(DEFAULT_TIMEOUT);
        cy.get('[data-test-id="author-input"]').type(testData.author);


        cy.get('[data-test-id="confirm-add-btn"]').click();
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();
    });

    it("The book should be listed with the right name and author", ()=>{

    });
});
