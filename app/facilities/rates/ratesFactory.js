angular.module('facilitiesModule.rates',[])
.factory('ratesFactory', function() {
  var ratesFactory = {};

  ratesFactory.rates = {
    roomA: {price: 10, hours: 1},
    roomB: {price: 10, hours: 1},
    spaceA: {price: 15, hours: 1},
    spaceB: {price: 20, hours: 1},
    full: {price: 30, hours: 1},
    court: {price: 50, hours: 2},
  };

  ratesFactory.getRates = function(location){
    return ratesFactory.rates[location];
  }

  return ratesFactory;
})