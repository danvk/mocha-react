//flux/AppStore.js
var Fluxxor = require('fluxxor');

var AppStore = Fluxxor.createStore({
    initialize: function() {
        this.state = {
            popupModal: {
                visible: false,
                component: null
            }
        };
        this.bindActions(
            'SHOW_POPUP_MODAL', this.showPopupModal
        );
    },
    serialize: function() {
        return JSON.stringify(this.state);
    },
    hydrate: function(json) {
        this.state = JSON.parse(json);
        console.log('Running in ' + this.state.server.env + ' on port ' + this.state.server.port);
    },
    showPopupModal: function(component) {
        this.state.popupModal.visible = true;
        this.state.popupModal.component = component;
        this.emit('change');
    }
});

module.exports = AppStore;
