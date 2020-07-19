# TS Lib Boilerplate

*Last update on July/2020*

This is a template project for a client TypeScript library creation.

It sets up:

- Webpack development environment
- Webpack bundle
- Mocha tests with Istanbul for coverage reports
- ESLint for TypeScript
- Prettier
- Demo page

## Set up

This setup assumes you're using VSCode as editor. Get the most of it by installing [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions.

### Before you start

Run:

```
$ npm install
```

## Scripts

### Development

Get a local server on `http://localhost:3000` with hot reload pointing to your demo page:

```
$ npm run start
```

### Tests

Run tests in `tests/**/*.spec.ts` and generate coverage report:

```
$ npm run test
```

### Deploy

Bundle your library into `dist/mylib.js`:

```
$ npm run bundle
```

### TODO

- [ ] Set up scripts to publish NPM package
- [ ] Set up scripts to deploy demo page on GHPages
- [ ] Set up SASS for demo page
