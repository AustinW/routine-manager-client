RoutineManagerEmber.AthleteEditView = Ember.View.extend({
	templateName: "athlete/edit",
	title: "",
	content: "",
	classNames: ["modal", "fade"],

	didInsertElement: function() {
		this.$().modal('show');
		this.$().one("hidden", this._viewDidHide);
	},

	// Modal dismissed
	_viewDidHide: function() {
		if ( ! this.isDestroyed) this.destroy();
	},

	close: function() {
		this.$(".close").click();
	}
});
