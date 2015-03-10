//spec2.js
describe('Spec 2', function() {

    // use a clean component for each test
    var MyComponent;

    beforeEach(function(){

        // replace any complex required components with a stub component (must be relative to component under test)
        mockery.registerMock('./BigComplicatedComponent.js', reactStub);
        MyComponent = require('../src/CheckboxWithLabel.js');
    });

    it('renders CheckboxWithLabel and stubs BigComplicatedComponent', function() {

        var TestContext = require('./lib/TestContext').getRouterComponent(MyComponent),
            component = TestContext.component;

        // log the output if you want
        console.log(global.document.body.innerHTML);

        // check your rendered className
        TestUtils.findRenderedDOMComponentWithClass(
            component, 'CheckboxWithLabel');
    });

    it('renders CheckboxWithLabel and stubs BigComplicatedComponent and checks props', function() {

        var TestContext = require('./lib/TestContext').getRouterComponent(MyComponent, {myProp: 'yadayada'}),
            component = TestContext.component,
            flux = TestContext.flux;

        // check your component props
        assert(component.props.myProp, 'yadayada');
    });


});