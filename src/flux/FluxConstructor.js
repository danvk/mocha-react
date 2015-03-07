var Fluxxor = require('fluxxor');
var actions = require('./ActionsBundle');
var AppStore = require('./AppStore');

module.exports = function() {
    var stores = {
        AppStore: new AppStore()
    };
    var flux = new Fluxxor.Flux(stores, actions);
    flux.serialize = function() {
        var data = {};
        for (var key in stores) {
            if (stores.hasOwnProperty(key)) {
                data[key] = stores[key].serialize();
            }

        }
        return JSON.stringify(data);
    };
    flux.hydrate = function(data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                stores[key].hydrate(data[key]);
            }
        }
    };
    return flux;
};
