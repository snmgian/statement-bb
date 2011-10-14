var ApplicationRouter = Backbone.Router.extend({
  initialize: function() {
    this.currentSlideNumber = 0;
  },

  routes: {
    "slides/:number": "getSlide"
  },

  getSlide: function(number) {
    var self = this;

    $.get('/bb/slide/' + number, function(data) {
      $('#slide_content').html(data);
      self.currentSlideNumber = number;
    });
  },

  gotoPreviousSlide: function() {
    if (this.currentSlideNumber > 1) {
      this.getSlide(this.currentSlideNumber - 1);
    }
  },

  gotoNextSlide: function() {
    this.getSlide(this.currentSlideNumber + 1);
  },
});
