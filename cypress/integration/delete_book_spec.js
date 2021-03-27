const { BASE_URL, seedData } = require('../support/constants');
const { createSeedData, changePagination } = require('../support/commands');
const DEFAULT_TIMEOUT = 500;

describe('Should delete book successfully', () => {

    let row;
    before(() => {
        cy.clearCookies();
        cy.visit(BASE_URL);
        createSeedData(seedData.name, seedData.author);
        changePagination();
        cy.get(`[data-test-id="${seedData.name}"]`).prev().find('input').click();

        cy.get('[data-test-id="delete-btn"]').click();
        cy.wait(DEFAULT_TIMEOUT);

    });

    it("The book should not be listed", () => {
        cy.get(`[data-test-id="${seedData.name}"]`).should('not.exist');
    });
});

