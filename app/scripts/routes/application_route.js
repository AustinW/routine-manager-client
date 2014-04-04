RoutineManagerEmber.ApplicationRoute = Ember.Route.extend({
    actions: {
        showEditAthlete: function() {
            this.transitionTo('athlete.edit');
        }
    }
});