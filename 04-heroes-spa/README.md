# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



# Comandos

npm install react-router-dom


npm i --dev jest babel-jest @babel/preset-env @babel/preset-react
npm i --dev @testing-library/react @testing-library/dom @testing-library/user-event @types/jest jest-environment-jsdom
npm i --dev jest-svg-transformer
npm i --save-dev @babel/core @babel/preset-typescript
npm i --save-dev identity-obj-proxy
npm i --dev whatwg-fetch

"test": "jest --watchAll=false --coverage --CI=true"
 
babel.config.js 
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
        '@babel/preset-typescript',
    ],
};

jest.config.js
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js'],
    moduleNameMapper: {
        "^.+\\.svg$": "jest-svg-transformer",
	"\\.(css|less|scss)$": "identity-obj-proxy",
  }
}

jest.setup.js

App.test.tsx
import { render, screen } from '@testing-library/react';
import App from '../App';

test('Renders main page correctly', async () => {
  render(<App />);
  const buttonCount = await screen.findByRole('button');
  expect(buttonCount.innerHTML).toBe('count is 0');
  expect(true).toBeTruthy();
});

package.json
//"type": "module",

