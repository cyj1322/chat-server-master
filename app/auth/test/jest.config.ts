import type {Config} from '@jest/types';
import {defaults} from 'jest-config';
import path from 'path';

// Sync object
const config: Config.InitialOptions = {
  rootDir: path.resolve(__dirname, '../'),
  verbose: true,
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testRegex: ".*\\.spec\\.ts$",
  collectCoverageFrom: ["**/*.(t|j)s"],
  transform: { "^.+\\.(t|j)s$": "ts-jest" },
  coverageDirectory: "./coverage",
  testEnvironment: "node",
};
export default config;