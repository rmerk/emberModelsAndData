import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    addCar: function(){
      var self = this;
      var rand = Math.floor((Math.random() * 1000) + 1);
      var newCar = this.store.createRecord('car', {
        id: rand,
        make: this.get('carMake'),
        model: this.get('carModel'),
        year: this.get('carYear')
      });

       newCar.save(); //this would be used to save if your using a DB
      // self.transitionTo('cars'); this will redirect to a new page.
    }
  }
});
