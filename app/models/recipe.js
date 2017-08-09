import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  ingredients: DS.hasMany('ingredient', { async: false, inverse: null }),
  source: DS.attr(),
  prepTime: DS.attr(),
  cookTime: DS.attr(),
  image: DS.attr(),
});
