import Ember from 'ember';

//this is the delete setup for the car model
export default Ember.Controller.extend({
  actions:{
    deleteCar: function(id){
      var self = this;

      this.store.findRecord('car', id).then(function(car){
        car.deleteRecord();
        car.save(); //this saves to the database
        //self.transitionTo('cars'); //this is used to redirect pages on submit
      });
    }
  }
});
