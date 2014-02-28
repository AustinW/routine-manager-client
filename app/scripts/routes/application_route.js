RoutineManagerEmber.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    },

    actions: {
        openModal: function(modalName, model) {
            this.controllerFor(modalName).set('model', model);

            return this.render(modalName, {
                into: 'application',
                outlet: 'modal'
            });
        },

        closeModal: function() {
            return this.disconnectOutlet({
                outlet: 'modal',
                parentView: 'application'
            });
        }
    }
});