// Generated by CoffeeScript 1.9.0
(function() {
  var __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __hasProp = {}.hasOwnProperty;

  define(['jquery', 'underscore', 'backbone', 'views/invoice_form_view'], function($, _, Backbone, InvoiceFormView) {
    var WorkspaceRouter;
    WorkspaceRouter = (function(_super) {
      __extends(WorkspaceRouter, _super);

      function WorkspaceRouter() {
        return WorkspaceRouter.__super__.constructor.apply(this, arguments);
      }

      WorkspaceRouter.prototype.routes = {
        '': 'welcome'
      };

      WorkspaceRouter.prototype.welcome = function() {
        (new InvoiceFormView).render();
      };

      return WorkspaceRouter;

    })(Backbone.Router);
    return WorkspaceRouter;
  });

}).call(this);
