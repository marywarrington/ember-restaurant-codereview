import Ember from 'ember';

export function reviewStars(params) {
  var reviewRating = params.get('rating');

  if (reviewRating === "5") {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (reviewRating === "4") {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (reviewRating === 3) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else if (reviewRating === 2) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span><span class="glyphicon glyphicon-star"></span>');
  } else {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  }
}

export default Ember.Helper.helper(reviewStars);
