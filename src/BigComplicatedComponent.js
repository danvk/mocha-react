// This "complicated" module shouldn't be transitively included in tests --
// it should be replaced with a stub. See tests/CheckboxWithLabel-test.js.
var React = require('react');

var BigComplicatedComponent = React.createClass({
  render: function() {
    console.log('Thinking really hard!');
    return <div>42</div>;
  }
});

module.exports = BigComplicatedComponent;
