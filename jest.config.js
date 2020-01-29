module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  // testEnvironment: 'node',
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  verbose: true
};
