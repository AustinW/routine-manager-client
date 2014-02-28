/*global Ember*/
RoutineManagerEmber.Athlete = DS.Model.extend({
    user_id:           DS.attr('number'),
    synchro_partner_id: DS.attr('number'),
    first_name:       DS.attr('string'),
    last_name:        DS.attr('string'),
    gender:           DS.attr('string'),
    birthday:         DS.attr('string'),
    team:             DS.attr('string'),
    trampoline_level: DS.attr('string'),
    doublemini_level: DS.attr('string'),
    tumbling_level:   DS.attr('string'),
    synchro_level:    DS.attr('string'),
    notes:            DS.attr('string'),
    created_at:       DS.attr('date'),
    updated_at:       DS.attr('date'),

    fullName: function() {
        return this.get('first_name') + ' ' + this.get('last_name');
    }.property('first_name', 'last_name'),

    genderClass: function() {
        return 'fa-' + this.get('gender');
    }.property('gender')
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

RoutineManagerEmber.Athlete.FIXTURES = [
  {
    "id": "1",
    "user_id": "1",
    "synchro_partner_id": "2",
    "first_name": "Austin",
    "last_name": "White",
    "gender": "male",
    "birthday": "1988-05-20",
    "team": "World Elite",
    "trampoline_level": "sr",
    "doublemini_level": "sr",
    "tumbling_level": "10",
    "synchro_level": "10",
    "notes": "",
    "created_at": "2014-02-05 03:19:20",
    "updated_at": "2014-02-13 19:08:34"
  },
  {
    "id": "2",
    "user_id": "1",
    "synchro_partner_id": "1",
    "first_name": "Logan",
    "last_name": "Dooley",
    "gender": "male",
    "birthday": "1987-09-26",
    "team": "World Elite",
    "trampoline_level": "sr",
    "doublemini_level": null,
    "tumbling_level": null,
    "synchro_level": "10",
    "notes": "",
    "created_at": "2014-02-05 19:40:57",
    "updated_at": "2014-02-13 19:08:34"
  }
];
