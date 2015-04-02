define [
  'jquery'
  'underscore'
  'backbone'
  'models/invoice'
  'text!templates/form.html'
], ($, _, Backbone, Invoice, formTemplate) ->
  class InvoiceFormView extends Backbone.View
    el: '#container'
    template: _.template(formTemplate)
    model: new Invoice
    events: 'submit form': 'submit'
    render: -> @$el.html @template()

    submit: (e) ->
      e.preventDefault()
      array = $('form').serializeArray()
      data = {}
      for invoice in array
        data[invoice['name']] = invoice['value']

      console.log data
      console.log @model.save(data)

  InvoiceFormView
