[![Build Status](https://travis-ci.org/danvk/mocha-react.svg?branch=master)](https://travis-ci.org/danvk/mocha-react)
[![Coverage Status](https://coveralls.io/repos/danvk/mocha-react/badge.svg?branch=master)](https://coveralls.io/r/danvk/mocha-react?branch=master)

mocha-react
===========

Demo of using MochaJS to test ReactJS components (with or without JSX, Harmony, Flux and React-Router).

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


About the tests:

All tests are bootstraped with tests/bootstrap.js which provides any globals you may need.  Each component is run through lib/TestContext.js to
make sure that components are properly routed and initialized with a flux store and props that you define.  The test context returns the component and
the flux object for tests.  Make sure to define these at the individual test level (eg. it) to avoid namespace conflicts.

- spec1.js
Require the TestClass which itself requires the flux store.  Check that the component mounts by having a class.

- spec2.js
Render the CheckboxWithLabel class but stub its BigComplicatedComponent require (because it may have an empty store).
Then add a prop to the component and assert the existence.

- spec3.js
Most basic component test

- spec4.js
Unit test the Actions of a component, using Sinon to spy on method.

Inspiration and guidance came from the [Testing React Components][2] blog post and the Khan Academy's [React Components Makefile][3].

See Also:

- mockery
 [http://bulkan-evcimen.com/using_mockery_to_mock_modules_nodejs.html][6]
- the node way
 [https://github.com/FredKSchott/the-node-way][7]
- react router issues
 [https://github.com/rackt/react-router/issues/437][8]
- react testing mocha
 [https://github.com/jesstelford/react-testing-mocha-jsdom][9]

[1]: http://facebook.github.io/jest/docs/tutorial-react.html#content
[2]: http://www.asbjornenge.com/wwc/testing_react_components.html
[3]: https://github.com/Khan/react-components/blob/master/Makefile
[4]: https://coveralls.io/r/danvk/mocha-react?branch=master
[5]: http://www.hammerlab.org
[6]: http://bulkan-evcimen.com/using_mockery_to_mock_modules_nodejs.html
[7]: https://github.com/FredKSchott/the-node-way
[8]: https://github.com/rackt/react-router/issues/437
[9]: https://github.com/jesstelford/react-testing-mocha-jsdom
