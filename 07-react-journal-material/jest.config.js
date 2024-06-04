const { transformIncludesAndExcludes } = require("@babel/preset-env");

module.exports = {
    //testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    transformIgnorePatterns: [],
    testEnvironment: 'jsdom',
}