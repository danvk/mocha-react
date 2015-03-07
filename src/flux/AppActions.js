//flux/AppActions.js

/*************************************************************
You can trigger other actions within actions. See how:
DO NOT call actions directly
UserActions.getUserSearches().call(this);
RATHER:
this.flux.actions.UserActions.getUserSearches();
**************************************************************/

var _ = require('lodash');

var AppActions = {
    showPopupModal: function(component) {
        this.dispatch('SHOW_POPUP_MODAL', component);
    }
};

module.exports = AppActions;
