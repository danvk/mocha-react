//spec1.js
describe('Spec 1', function() {

    // use a clean component for each test
    var MyComponent;

    beforeEach(function(){
        // no need to replace components in this test
        MyComponent = require('../src/TestClass.jsx');
    });

    it('renders the TestClass with Flux', function() {

        var TestContext = require('./lib/TestContext').getRouterComponent(MyComponent),
            component = TestContext.component;

        // log the output if you want
        console.log(global.document.body.innerHTML);

        // check your rendered className
        TestUtils.findRenderedDOMComponentWithClass(
            component, 'TestClass');
    });

});