//spec4.js

describe('Spec4.js', function() {

    // use a stub component for this test and only test the actions
    var MyComponent, TestContext, flux;

    beforeEach(function(){

        MyComponent= global.reactStub;
        TestContext = require('./lib/TestContext').getRouterComponent(MyComponent);
        flux = TestContext.flux;

    });

    it('should execute AppActions.showPopupModal', function() {

        sinon.spy(flux.actions.AppActions, 'showPopupModal');
        flux.actions.AppActions.showPopupModal({});
        assert(flux.actions.AppActions.showPopupModal.calledOnce);
        //make sure to restore all the spies after each test
        flux.actions.AppActions.showPopupModal.restore();

    });



});
