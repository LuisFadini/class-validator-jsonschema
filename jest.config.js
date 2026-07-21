import { defineConfig } from 'jest'

export default defineConfig({
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      { babelConfig: false, tsconfig: 'tsconfig.test.json' },
    ],
  },

  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'js', 'json'],

  testMatch: ['<rootDir>/__tests__/**/*.test.ts'],

  roots: ['<rootDir>/__tests__'],
})
