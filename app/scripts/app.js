var RoutineManagerEmber = window.RoutineManagerEmber = Ember.Application.create({
	LOG_TRANSITIONS: true
});

Ember.onerror = function(error) {
	console.log(error.stack);
};

/* Order and include as you please. */
require('scripts/components/*');
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/views/*');
require('scripts/router');
require('scripts/helpers');
