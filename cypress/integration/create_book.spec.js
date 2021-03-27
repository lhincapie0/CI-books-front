const { BASE_URL, testData, DEFAULT_TIMEOUT } = require('../support/constants');

describe('Should create book successfully', () => {

    before(() => {
        cy.clearCookies();

        cy.visit(BASE_URL);
        cy.get('[data-test-id="add-btn"').click();
        cy.wait(DEFAULT_TIMEOUT);
        cy.get('[data-test-id="name-input"').type(testData.name);
        cy.wait(DEFAULT_TIMEOUT);
        cy.get('[data-test-id="author-input"]').type(testData.author);


        cy.get('[data-test-id="confirm-add-btn"]').click();
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();
    });

    it("The book should be listed with the right name", () => {
        cy.get('table').contains('td', testData.name).should('be.visible');
    });
    it("The book should be listed with the right author", () => {
        cy.get('table').contains('td', testData.author).should('be.visible');
    });
});


describe('Should be able to cancel creation', () => {
    before(() => {
        cy.clearCookies();

        cy.visit(BASE_URL);
        cy.get('[data-test-id="add-btn"').click();
        cy.wait(DEFAULT_TIMEOUT);
        cy.get('[data-test-id="name-input"').type(`${testData.name}-cancel`);
        cy.wait(DEFAULT_TIMEOUT);
        cy.get('[data-test-id="author-input"]').type(`${testData.author}-cancel`);

        cy.get('[data-test-id="cancel-add-btn"]').click();
        cy.contains('10 / page').click();
        cy.contains('50 / page').click();
    });

    it("The book should not be listed when cancel", () => {
        cy.get('table').contains('td', `${testData.name}-cancel`).should('not.exist');
        cy.get('table').contains('td', `${testData.author}-cancel`).should('not.exist');
    });
});
