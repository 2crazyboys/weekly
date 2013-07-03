Weekly.IndexRoute = Ember.Route.extend({

  setupController: function(controller, model){
    return controller.set('model', model)
  },

  model: function() {
    return [ {name: "João"}, {name: "Thiago"}, {name: "Carlos"} ]
  },

  activate: function() {
    console.log("activate")
  },

  deactivate: function() {
    console.log("deactivate")
  }

});