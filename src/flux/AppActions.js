//flux/AppActions.js

var AppActions = {
    showPopupModal: function(component) {
        this.dispatch('SHOW_POPUP_MODAL', component);
    }
};

module.exports = AppActions;
