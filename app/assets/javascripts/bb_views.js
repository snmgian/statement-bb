_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g,
  evaluate: /\{\%(.+?)\%\}/g
};

var HelloView = Backbone.View.extend({

  tagName: "div",

  className: "hello",

  events: {
    'click': 'notify'
  },

  render: function() {
    $(this.el).html("Hello world!");
    return this;
  },

  notify: function() {
    alert('clicked!');
  }

});


var BookView = Backbone.View.extend({

  initialize: function() {

    this.model.bind("change", this.render, this);
  },

  render: function() {
    $(this.el).html(this.model.get("title") + " = U$S " + this.model.get("price"));
    return this;
  }
});

var ChangePriceView = Backbone.View.extend({

  events: {
    'click input[type=button]': 'change'
  },

  render: function() {
    var template = _.template( $("#change_price_form").html(), {price: this.model.get("price")} );
    $(this.el).html(template);
    return this;
  },

  change: function() {
    var price = $('input[type=text]').val();
    this.model.set({price: price});
  }
});

var ChangePriceBoundView = Backbone.View.extend({

  render: function() {
    var template = _.template( $("#change_price_form").html(), {price: this.model.get("price")} );
    $(this.el).html(template);

    Backbone.ModelBinding.bind(this);
    return this;
  }
});
