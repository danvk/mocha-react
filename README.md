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

- preprocessor.js registers a handler for the "jsx" extension. You can enable harmony here if you like.
- File extensions have been changed from `.js` to `.jsx`.
- A fake DOM is provided via `jsdom`.

Inspiration and guidance came from the [Testing React Components][2] blog post and the Khan Academy's [React Components Makefile][3].

[1]: http://facebook.github.io/jest/docs/tutorial-react.html#content
[2]: http://www.asbjornenge.com/wwc/testing_react_components.html
[3]: https://github.com/Khan/react-components/blob/master/Makefile
