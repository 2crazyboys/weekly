Weekly.IndexController = Ember.ArrayController.extend(
  {
    add: function() {
      this.content.pushObject({name: this.get('name')})
    }
  }
)