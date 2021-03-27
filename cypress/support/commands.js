const { DEFAULT_TIMEOUT } = require('../support/constants');

module.exports.createSeedData = function createSeedData(name, author) {
    cy.get('[data-test-id="add-btn"').click();
    cy.wait(DEFAULT_TIMEOUT);
    cy.get('[data-test-id="name-input"').type(name);
    cy.wait(DEFAULT_TIMEOUT);
    cy.get('[data-test-id="author-input"]').type(author);


    cy.get('[data-test-id="confirm-add-btn"]').click();
};

module.exports.changePagination = function changePagination() {
    cy.contains('10 / page').click();
    cy.contains('50 / page').click();
}
