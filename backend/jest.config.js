// jest.config.js
module.exports = {
  testEnvironment: 'node',
  globalSetup: './jest.global-setup.js',
  globalTeardown: './jest.global-teardown.js',
  testPathIgnorePatterns: ['/node_modules/', '/config/']
};
