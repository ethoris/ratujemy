// jest.config.js
module.exports = {
  testEnvironment: 'node',
  globalSetup: './jest.global-setup.js',
  globalTeardown: './jest.global-teardown.js',
  testPathIgnorePatterns: ['/node_modules/', '/config/'],
  setTimeout: 20000 // Ustaw timeout na 10 sekund (10000 ms)
};

