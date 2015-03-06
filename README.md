[![Build Status](https://travis-ci.org/danvk/mocha-react.svg?branch=master)](https://travis-ci.org/danvk/mocha-react)
[![Coverage Status](https://coveralls.io/repos/danvk/mocha-react/badge.svg?branch=master)](https://coveralls.io/r/danvk/mocha-react?branch=master)

mocha-react
===========

Demo of using MochaJS to test a ReactJS component (with JSX and Harmony and Flux and React-Router).

This is a port of the [Jest React tutorial][1]. If you'd like to test your React JS components using Mocha instead of Jest, you can use this as a template.

Quick start:

```
npm install
npm test
```

What this template gets you:

- JSX/Harmony transpilation with Babel
- React Component stubbing (ala Jest's pretty borked "auto-mocking") with Mockery and Sinon
- Code coverage via Blanket and coveralls.io

For more background and information on how this works, see [this blog post][5].

Here are the high order bits:

- A fake DOM is provided via `jsdom` (see `tests/testdom.js`).
- `global.reactStub` contains a mini React stub that you can use for mocking.
- `tests/TestContext.js` provides real Flux tests and simulated ReactRouter.Run,
- Additionally instrumenting code for test coverage. The results are [posted to coveralls.io][4].

To run the tests using `npm test` or the `mocha` command line:

```
mocha tests/*.js --recursive --reporter spec
```

Inspiration and guidance came from the [Testing React Components][2] blog post and the Khan Academy's [React Components Makefile][3].

[1]: http://facebook.github.io/jest/docs/tutorial-react.html#content
[2]: http://www.asbjornenge.com/wwc/testing_react_components.html
[3]: https://github.com/Khan/react-components/blob/master/Makefile
[4]: https://coveralls.io/r/danvk/mocha-react?branch=master
[5]: http://www.hammerlab.org
[6]: http://bulkan-evcimen.com/using_mockery_to_mock_modules_nodejs.html
[7]: https://github.com/FredKSchott/the-node-way
