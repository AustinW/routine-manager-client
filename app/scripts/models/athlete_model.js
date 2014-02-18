/*global Ember*/
RoutineManagerEmber.Athlete = DS.Model.extend({
    userId: DS.attr('number'),

    synchroPartnerId: DS.attr('number'),

    firstName: DS.attr('string'),

    lastName: DS.attr('string'),

    gender: DS.attr('string'),

    birthday: DS.attr('string'),

    team: DS.attr('string'),

    trampolineLevel: DS.attr('string'),

    doubleminiLevel: DS.attr('string'),

    tumblingLevel: DS.attr('string'),

    synchroLevel: DS.attr('string'),

    notes: DS.attr('string'),

    createdAt: DS.attr('date'),

    updatedAt: DS.attr('date')
});

// probably should be mixed-in...
RoutineManagerEmber.Athlete.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
RoutineManagerEmber.Athlete.FIXTURES = [
  
  {
    id: 0,
    
    user_id: 'foo',
    
    synchro_partner_id: 'foo',
    
    first_name: 'foo',
    
    last_name: 'foo',
    
    gender: 'foo',
    
    birthday: 'foo',
    
    team: 'foo',
    
    trampoline_level: 'foo',
    
    doublemini_level: 'foo',
    
    tumbling_level: 'foo',
    
    synchro_level: 'foo',
    
    notes: 'foo',
    
    created_at: 'foo',
    
    updated_at: 'foo'
    
  },
  
  {
    id: 1,
    
    user_id: 'foo',
    
    synchro_partner_id: 'foo',
    
    first_name: 'foo',
    
    last_name: 'foo',
    
    gender: 'foo',
    
    birthday: 'foo',
    
    team: 'foo',
    
    trampoline_level: 'foo',
    
    doublemini_level: 'foo',
    
    tumbling_level: 'foo',
    
    synchro_level: 'foo',
    
    notes: 'foo',
    
    created_at: 'foo',
    
    updated_at: 'foo'
    
  }
  
];
