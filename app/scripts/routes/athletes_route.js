RoutineManagerEmber.AthletesRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('athlete');
  }
});

