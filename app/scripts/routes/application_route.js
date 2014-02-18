RoutineManagerEmber.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['red', 'yellow', 'blue'];
    }
});

// RoutineManagerEmber.AthletesRoute = Ember.Route.extend({
// 	model: function() {
// 		return this.store.find('athlete');
// 	}
// });
