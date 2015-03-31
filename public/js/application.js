var InvoiceView = Backbone.View.extend({
  el: "#container",

  events: {
    "click .icon":          "open",
    "click .button.edit":   "openEditDialog",
    "click .button.delete": "destroy"
  },

  initialize: function() {
    //this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var source   = $("#entry-template").html();
    console.log(source);
    var template = Handlebars.compile(source);
    var context = {title: "My New Post", body: "This is my first post!"};
    var html    = template(context);
    this.$el.append(html);
  }
});

var WorkspaceRouter = Backbone.Router.extend({
  routes: {
    "": "welcome",
  },

  welcome: function() {
    var invoice = new InvoiceView({});
    invoice.render();
  }
});

$( document ).ready(function() {
  new WorkspaceRouter();
  Backbone.history.start({pushState: true});
});
