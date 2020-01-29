module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  transform: {
    '\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest'
  },
  verbose: true
};
