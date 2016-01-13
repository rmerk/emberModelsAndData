import Ember from 'ember';

// var cars = [
//   {
//       "id":1,
//       "make": "Honda",
//       "model": "Accord",
//       "year" : "2007"
//   },
//   {
//       "id":1,
//       "make": "Toyota",
//       "model": "Camery",
//       "year" : "2014"
//   },
//   {
//       "id":1,
//       "make": "Honda",
//       "model": "Civic",
//       "year" : "2009"
//   }
// ];


export default Ember.Route.extend({
    model: function(){
        return this.store.findAll('car');

      //This was how I was calling my json from the public folder.

      // return  Ember.$.getJSON('cars.json').then(function(data){
      //     return data;
      // });
    }
});
