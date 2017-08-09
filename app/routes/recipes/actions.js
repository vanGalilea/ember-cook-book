import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save(model){
      this.currentModel.save()
        .then((model) => this.transitionTo('recipes.show', model))
        .catch(e => {
          console.log(e.errors);
        });
    },

    willTransition() {

      this.controller.get('model').rollbackAttributes();
    },
    addIngredient() {
      this.currentModel.get('ingredients').pushObject(
        this.get('store').createRecord('ingredient')
      );
    }
  }
});
