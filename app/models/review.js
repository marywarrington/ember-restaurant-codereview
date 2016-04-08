import DS from 'ember-data';

export default DS.Model.extend({
  reviewer: DS.attr(),
  review: DS.attr(),
  rating: DS.attr(),
  restaurant: DS.belongsTo('restaurant', { async: true})
});
