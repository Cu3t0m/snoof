module.exports = {
  roots: ['<rootDir>/test'],
  transform: {
    '^.+\\.(ts|tsx)$': '<rootDir>/node_modules/babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$'],
  moduleDirectories: ['node_modules', '.'],
  resetMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    "react-hls-player": "<rootDir>/test/stubs/react-hls-player.tsx",
  }
}
