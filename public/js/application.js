var Invoice = Backbone.Model.extend({
  url: '/invoice',
});

var InvoiceFormView = Backbone.View.extend({
  el: "#container",

  template: _.template($('#form').html()),

  model: new Invoice,

  events: {
    "submit form": "submit"
  },

  render: function() {
    this.$el.html(this.template());
  },

  submit: function(e) {
    e.preventDefault();
    array = $('form').serializeArray();
    data  = {};
    for (var i = 0, l = array.length; i < l; i ++) {
      var v = array[i];
      data[v['name']] = v['value']
    }
    console.log( this.model.save(data));
  }
});

var WorkspaceRouter = Backbone.Router.extend({
  routes: {
    "": "welcome",
  },

  welcome: function() {
    new InvoiceFormView().render();
  }
});


$( document ).ready(function() {
  new WorkspaceRouter();
  Backbone.history.start({pushState: true});
});
