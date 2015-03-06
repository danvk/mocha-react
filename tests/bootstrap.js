//test/bootstrap.js
//put this in your test directory and smoke it (include it with your tests or test recursively)
// globals
global.assert = require('assert');
global.babel = require('babel/register');
global.React = require('react/addons');
global.sinon = require('sinon');
global.jsdom = require('jsdom').jsdom('<!doctype html><html><body></body></html>');
global.TestUtils = React.addons.TestUtils;
global.mockery = require('mockery');
global.document = jsdom;
global.window = document.parentWindow;
global.navigator = window.navigator;
global.reactStub = require("react").createClass({render:function(){return null;}});
global.ReactTools = require('react-tools');
global.reactStub = React.createClass({
                        displayName: 'StubClass',
                        render: function() {
                            return null;
                        }
                    });

// setup
before(function(){
    mockery.enable({
        warnOnUnregistered: false
    });
});
beforeEach(function(){

});

// teardown
afterEach(function() {
    mockery.deregisterAll();    // Deregister all Mockery mocks from node's module cache
});

after(function(){
    mockery.disable();
});