// tests/TestContext.js
// used to bootstrap components that require flux and react-router
'use strict';

var Router = require('react-router'),
    Route = Router.Route,
    TestLocation = Router.TestLocation,
    StubRouterContext = require('./StubRouterContext'),
    FluxxorTestUtils = require('fluxxor-test-utils'),
    FluxConstructor = require('../../src/flux/FluxConstructor.js');

var TestContext = {

    getRouterComponent: function(targetComponent, props) {

        // create flux from real flux
        var realFlux = FluxConstructor();
        var fakeFlux = FluxxorTestUtils.fakeFlux(realFlux);

        // check props and add flux
        if(typeof props === 'undefined'){
            props = {};
        }
        props.flux = fakeFlux;

        // create components
        var component, mainComponent;

        // and routes
        var routes = (
            <Route name="test" path="/test" handler={targetComponent} />
        );

        // create router history
        var location = new TestLocation(['/test']);

        // run router
        Router.run(routes, location, function (Handler) {

            // stub out router context
            var TestSubject = StubRouterContext(Handler, props);

            // return render main component into dom
            mainComponent = React.render(<TestSubject />, global.document.body);

            // and utility component
            component = TestUtils.findRenderedComponentWithType(mainComponent, targetComponent);

        });

        return {
            flux: fakeFlux,
            component: component,
            mainComponent: mainComponent,
            location: TestLocation
        };
    }
};

module.exports = TestContext;