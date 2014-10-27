/** @jsx React.DOM */
var React = require('react/addons');
var BigComplexModule = require('./BigComplexModule.js');

var CheckboxWithLabel = React.createClass({
  getInitialState: function() {
    return { isChecked: false };
  },
  onChange: function() {
    this.setState({isChecked: !this.state.isChecked});
  },
  render: function() {
    var x = BigComplexModule.bigComplexFunction();
    return (
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    );
  }
});
module.exports = CheckboxWithLabel;
