import Ember from 'ember';

export default Ember.Component.extend({
  addRestaurant: false,
  actions: {
    restaurantFormShow() {
      this.set('addRestaurant', true);
    },
    save() {
      var params = {
        name: this.get('name'),
        cuisine: this.get('cuisine'),
        address: this.get('address')
      };
      this.set('addRestaurant', false);
      this.sendAction('save', params);
    }
  }
});
