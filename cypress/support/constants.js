const {random} = require('faker');

const BASE_URL ='https://books-frontend-lhincapie0.herokuapp.com/';
const DEFAULT_TIMEOUT = 500;

const testData = {
    name: `e2e book name ${random.words(2)}`,
    author: `e2e author name ${random.words(2)}`
};

const seedData = {
    name: `${random.words(2)}`,
    author: `${random.words(2)}`
};

module.exports = {
    BASE_URL,
    DEFAULT_TIMEOUT,
    testData,
    seedData
}
