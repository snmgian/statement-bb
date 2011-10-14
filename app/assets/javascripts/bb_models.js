var Book = Backbone.Model.extend({
  urlRoot: '/books',
});

var BookCollection = Backbone.Collection.extend({
  model: Book,
  url: '/books',
});

var Books = new BookCollection();
