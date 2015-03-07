var React = require('react/addons');
var BigComplicatedComponent = require('./BigComplicatedComponent.js');

var CheckboxWithLabel = React.createClass({
  getInitialState: function() {
    return { isChecked: false };
  },
  onChange: function() {
    this.setState({isChecked: !this.state.isChecked});
  },
  render: function() {
    return (
      <label className="CheckboxWithLabel">
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
        <BigComplicatedComponent />
      </label>
    );
  }
});

module.exports = CheckboxWithLabel;
