const { BASE_URL, seedData } = require('../support/constants');
const { createSeedData, changePagination } = require('../support/commands');
const DEFAULT_TIMEOUT = 500;

describe('Should edit book successfully', () => {

    let row;
    before(() => {
        cy.clearCookies();
        cy.visit(BASE_URL);
        createSeedData(seedData.name, seedData.author);
        changePagination();
        row = cy.get(`[data-test-id="${seedData.author}"]`).next().click();
        cy.get('[data-test-id="name-input"').type('-edited');
        cy.wait(DEFAULT_TIMEOUT);
        cy.get('[data-test-id="author-input"]').type('-edited');

        cy.get('[data-test-id="confirm-add-btn"]').click();
        changePagination();
    });


    it("The book should be listed with the right name", () => {
        cy.get('table').contains('td', `${seedData.name}-edited`).should('be.visible');
    });

    it("The book should be listed with the right author", () => {
        cy.get('table').contains('td', `${seedData.author}-edited`).should('be.visible');
    });
});

