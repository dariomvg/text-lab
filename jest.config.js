const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // Path a la raíz del proyecto
});

const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Configuración para Testing Library
  moduleNameMapper: {
    // Mapea archivos CSS/SCSS para evitar errores
    '\\.(css|scss)$': 'identity-obj-proxy',
    // Configura alias como los de Next.js
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    // Utiliza ts-jest para transformar archivos TypeScript
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
};

module.exports = createJestConfig(customJestConfig);