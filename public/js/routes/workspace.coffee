define [
  'jquery'
  'underscore'
  'backbone'
  'views/invoice_form_view'
], ($, _, Backbone, InvoiceFormView) ->
  class WorkspaceRouter extends Backbone.Router
    routes: '': 'welcome'
    welcome: ->
      (new InvoiceFormView).render()
      return

  WorkspaceRouter
