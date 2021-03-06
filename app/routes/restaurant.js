import Ember from 'ember';

export default Ember.Route.extend({
  favoriteRestaurants: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('restaurant', params.restaurant_id);
  },

  actions: {
    save(params) {
      var newReview = this.store.createRecord('review', params);
      var restaurant = params.restaurant;
      restaurant.get('reviews').addObject(newReview);
      newReview.save().then(function() {
        return restaurant.save();
      });
      this.transitionTo('restaurant', params.restaurant);
    },

    addToFavorites(restaurant) {
      this.get('favoriteRestaurants').add(restaurant);
    },

    removeFromFavorites(restaurant) {
      this.get('favoriteRestaurants').remove(restaurant);
    }
  }
});
