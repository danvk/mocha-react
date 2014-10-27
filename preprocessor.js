// Source: https://github.com/Khan/react-components/blob/master/test/compiler.js
var fs = require('fs');
var ReactTools = require('react-tools');
require.extensions['.jsx'] = function(module, filename) {
  var content;
  content = fs.readFileSync(filename, 'utf8');
  var compiled = ReactTools.transform(content, {harmony: true});
  return module._compile(compiled, filename);
};
