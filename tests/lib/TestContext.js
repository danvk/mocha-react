// tests/TestContext.js
// used to bootstrap components that require flux
'use strict';

var Router = require('react-router'),
    Route = Router.Route,
    React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    TestLocation = require('react-router/modules/locations/TestLocation'),
    FluxxorTestUtils = require('fluxxor-test-utils'),
    FluxConstructor = require('../../src/flux/FluxConstructor.js'),
    realFlux = FluxConstructor(),
    fakeFlux = FluxxorTestUtils.fakeFlux(realFlux);

var TestContext = {

    getRouterComponent: function(targetComponent, props) {

        //check props and add flux
        if(typeof props === 'undefined'){
            props = {};
        }
        props.flux = fakeFlux;

        var component, mainComponent,
            routes = [
                React.createFactory(Route)({
                    name: 'test',
                    handler: targetComponent
                })
            ];

        //create router history
        TestLocation.history = ['/test'];

        //run router
        Router.run(routes, TestLocation, function (Handler) {

            mainComponent = React.render(React.createFactory(Handler)(props), global.document.body);
            component = TestUtils.findRenderedComponentWithType(mainComponent, targetComponent);

        });

        return {
            flux: fakeFlux,
            component: component,
            mainComponent: mainComponent
        };
    }
};

module.exports = TestContext;