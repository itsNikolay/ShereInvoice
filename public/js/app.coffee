define [
  'jquery'
  'underscore'
  'backbone'
  'routes/workspace'
], ($, _, Backbone, WorkspaceRouter) ->
  $ ->
    new WorkspaceRouter
    Backbone.history.start pushState: true
