var BookLine = Backbone.Model.extend({

  defaults: {
    "quantity": 1
  },

  initialize: function() {
    this.set({title: this.get("model").get("title")});
    this.set({price: this.get("model").get("price")});
  },

  subTotal: function() {
    return this.get("price") * this.get("quantity");
  }

});

var BookLineCollection = Backbone.Collection.extend({
  model: BookLine,

  total: function() {
    return this.reduce(function(total, bookLine) {
      return total + bookLine.subTotal();
    }, 0);
  }
});

var ShoppingLineView = Backbone.View.extend({
  tagName: 'tr',

  initialize: function() {
    this.model.bind("change", this.render, this);
  },

  events: {
    "change input.quantity":      "quantityChanged"
  },

  render: function() {
    var template = _.template( $('#shopping_line_tpl').html(), {bookLine: this.model} );
    $(this.el).html(template);
    return this;
  },

  quantityChanged: function() {
    var quantity = parseInt($('input.quantity', this.el).val());
    this.model.set({quantity: quantity});
  }
});

var ShoppingView = Backbone.View.extend({

  initialize: function() {
    this.collection.bind("change", this.reRenderTotal, this);
  },

  render: function() {
    var template = _.template( $("#shopping_lines_tpl").html(), {total: this.roundCurrency(this.collection.total())} );
    $(this.el).html(template);

    var lineViews = this.collection.map(function(model) {
      var lineView = new ShoppingLineView({model: model});
      return lineView.render().el;
    });

    $('tbody', this.el).append(lineViews);

    return this;
  },

  reRenderTotal: function() {
    var duration = 3000;
    var self = this;

    $('.total').fadeOut(duration, function(duration) {
      $(this).text(self.roundCurrency(self.collection.total()));
      $(this).fadeIn(duration);
    });
  },

  roundCurrency: function(amount) {
    return new Number(amount).toFixed(2);
  }

});
