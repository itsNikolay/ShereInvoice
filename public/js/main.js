require.config({
  paths: {
    "jquery":     "../components/jquery/dist/jquery.min",
    "underscore": "../components/underscore/underscore-min",
    "backbone":   "../components/backbone/backbone"
  }
});
require([
  'app',
], function(){});
