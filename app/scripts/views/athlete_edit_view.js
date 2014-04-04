RoutineManagerEmber.AthleteEditView = Ember.View.extend({
    templateName: 'athlete/edit',

    didInsertElement: function() {
        this.$('#athleteEditModal').modal('show');
        this.$('#athleteEditModal').on('hidden.bs.modal', $.proxy(this._viewDidHide, this));
    },

    // Modal dismissed
    _viewDidHide: function() {
        this.get('controller').transitionToRoute('athlete');
    },

    close: function() {
        this.$('.close').click();
    }
});