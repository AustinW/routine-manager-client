RoutineManagerEmber.AthleteEditView = Ember.View.extend({

    didInsertElement: function() {
        this.$('#athlete-edit-modal').modal('show');
    },

    willDestroyElement: function() {
        $('.modal-backdrop').fadeOut(500);
    },

    close: function() {
        console.log("Closing modal...", this.$('.close'));
        this.$('#athlete-edit-modal').modal('hide');
    },

    actions: {
        save: function() {
            console.log("View handling close event");

            this.close();

            this.get('controller').send('save');
        },

        cancel: function() {
            console.log("Cancelling...");

            this.close();

            this.get('controller').send('cancel');
        }
    }
});