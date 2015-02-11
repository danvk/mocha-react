// Based on https://github.com/Khan/react-components/blob/master/test/compiler.js
var transformer = require('./jsx-stub-transform'),
    origJs = require.extensions['.js'];

// Install the compiler.
require.extensions['.js'] = function(module, filename) {
  // optimization: code in a distribution should never go through JSX compiler.
  if (filename.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, filename);
  }

  return module._compile(transformer.transform(filename), filename);
};
