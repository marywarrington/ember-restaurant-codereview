import Ember from 'ember';

export default Ember.Component.extend({
  favoriteRestaurants: Ember.inject.service(),

  fullInfo: Ember.computed('restaurant.name', 'restaurant.cuisine', function() {
    return this.get('restaurant.name') + ' -- ' + this.get('restaurant.cuisine');
  }),

  actions: {
    addToFavorites(model) {
      this.get('restaurants').add(model);
    },
    removeFromFavorites(model) {
      this.get('restaurants').remove(model);
    }
  }
});
