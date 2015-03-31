var InvoiceView = Backbone.View.extend({
  el: "#container",

  render: function() {
    console.log(this);
    template = _.template($('#test').html())
    this.$el.html(template({ title: 'hello' }));
    return this
  }
});

var WorkspaceRouter = Backbone.Router.extend({
  routes: {
    "": "welcome",
  },

  welcome: function() {
    console.log('hi');
    var invoice = new InvoiceView({});
    invoice.render();
  }
});

$( document ).ready(function() {
  new WorkspaceRouter();
  Backbone.history.start({pushState: true});
});
