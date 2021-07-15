import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageReporters: ['lcov', 'text', 'text-summary'],
  reporters: [
    'default',
    ['jest-junit', { suiteName: 'oxidation-ts tests', outputDirectory: './reports', outputName: 'oxidation-ts.xml' }],
  ],
  testPathIgnorePatterns: ['node_modules', 'dist'],
};

export default config;
