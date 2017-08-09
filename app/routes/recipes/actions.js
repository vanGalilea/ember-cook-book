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
    },
    deleteIngredient(ingredient) {
      this.currentModel.get('ingredients').removeObject(ingredient);
    },
    addInstruction() {
      this.currentModel.get('instructions').pushObject(
        this.get('store').createRecord('instruction')
      );
    },
    deleteInstruction(instruction) {
      this.currentModel.get('instructions').removeObject(instruction);
    }
  }
});
