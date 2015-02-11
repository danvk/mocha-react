mocha-react
===========

Minimal demo of using MochaJS to test a ReactJS component (with JSX and Harmony).

This is a port of the [Jest React tutorial][1]. If you'd like to test your React JS components using Mocha instead of Jest, you can use this as a template.

Quick start:

```
npm install
npm test
```

High order bits:

- A fake DOM is provided via `jsdom` (see `tests/testdom.js`).
- `global.reactModulesToStub` contains a list of modules to replace with stubs (ala Jest).
- `tests/compiler.js` registers a compiler which transforms JSX/Harmony code to standard ES5 JS and implements the stubbing.

To run the tests using the `mocha` command line:

```
mocha --compilers .:tests/compiler.js tests/*test.js
```

Inspiration and guidance came from the [Testing React Components][2] blog post and the Khan Academy's [React Components Makefile][3].

[1]: http://facebook.github.io/jest/docs/tutorial-react.html#content
[2]: http://www.asbjornenge.com/wwc/testing_react_components.html
[3]: https://github.com/Khan/react-components/blob/master/Makefile
