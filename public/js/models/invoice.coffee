define [
  'jquery'
  'underscore'
  'backbone'
], ($, _, Backbone) ->
  class Invoice extends Backbone.Model
    url: '/invoice'

  Invoice
