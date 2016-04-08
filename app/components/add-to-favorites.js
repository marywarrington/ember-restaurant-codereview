import Ember from 'ember';

export default Ember.Component.extend({
  favoriteRestaurants: Ember.inject.service(),

  actions: {
    addToFavorites(model) {
      this.get('restaurants').add(model);
    }
  }
});
