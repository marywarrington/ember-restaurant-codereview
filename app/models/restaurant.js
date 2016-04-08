import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  cuisine: DS.attr(),
  address: DS.attr()
  // reviews: DS.hasMany('review', {async: true }),
});
