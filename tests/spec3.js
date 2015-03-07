//spec3.js
describe('Spec 3', function() {

    // use a clean component for each test
    var MyComponent;

    beforeEach(function(){

        // no need to replace components in this test
        MyComponent = require('../src/BigComplicatedComponent.js');

    });

    it('renders the BigComplicatedComponent', function() {

        var TestContext = require('./lib/TestContext').getRouterComponent(MyComponent),
            component = TestContext.component;

        // log the output if you want
        console.log(global.document.body.innerHTML);

        // check your rendered className
        TestUtils.findRenderedDOMComponentWithClass(
            component, 'BigComplicatedComponent');
    });

});