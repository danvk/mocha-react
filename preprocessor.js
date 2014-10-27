// preprocessor.js
// (function() {
//   var ReactTools = require('react-tools');
//   console.log('called process');
//   return ReactTools.transform(src);
// })();
// 
var fs = require('fs');
var ReactTools = require('react-tools');
require.extensions['.jsx'] = function(module, filename) {
  var content;
  content = fs.readFileSync(filename, 'utf8');
  var compiled = ReactTools.transform(content, {harmony: true});
  return module._compile(compiled, filename);
};
