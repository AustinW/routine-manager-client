RoutineManagerEmber.AthleteEditController = Ember.ObjectController.extend({
  needs: 'athlete',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.athlete.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('athlete',this.get('model'));
    }
  }
});

