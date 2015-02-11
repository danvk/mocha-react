// Based on https://github.com/Khan/react-components/blob/master/test/compiler.js
var fs = require('fs'),
    ReactTools = require('react-tools'),
    origJs = require.extensions['.js'];

require.extensions['.js'] = function(module, filename) {
  // optimization: code in a distribution should never go through JSX compiler.
  if (filename.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, filename);
  }

  var content;
  content = fs.readFileSync(filename, 'utf8');
  var compiled = ReactTools.transform(content, {harmony: true});
  return module._compile(compiled, filename);
};
