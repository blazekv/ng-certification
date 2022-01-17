require('jest-preset-angular/ngcc-jest-processor');
const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { paths } = require('./tsconfig.json').compilerOptions;

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'jest-preset-angular',

  setupFilesAfterEnv: ['<rootDir>/setupJest.ts'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
};
