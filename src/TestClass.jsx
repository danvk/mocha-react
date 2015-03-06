//modules/TestClass.jsx
var React = require('react');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var TestClass = React.createClass({
    displayName: 'TestClass',
    mixins: [FluxMixin, StoreWatchMixin('AppStore')],
    getStateFromFlux: function() {
        var flux = this.getFlux();
        return {
            appStore: flux.store('AppStore').state
        };
    },
    componentDidMount: function(){
    },
    render: function() {
        return (
            <div id="" className="TestClass">
                <div>Test Class</div>
            </div>
        );
    }
});


module.exports = TestClass;
