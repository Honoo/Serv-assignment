angular.module('facilitiesModule.availability',[])
.directive('availability',function(){
  return {
    restrict: 'E',
    templateUrl: 'app/facilities/availability/availability.html',
  }
})
.controller("AvailabilityController", ['$scope', 'availabilityFactory', 'calendarFactory', 'ratesFactory',
  function($scope, availabilityFactory, calendarFactory, ratesFactory){
    $scope.locations = [
      {short: 'roomA', title: 'Meeting Room A'}, 
      {short: 'roomB', title: 'Meeting Room B'}, 
      {short: 'spaceA', title: 'Meeting Point Space A'}, 
      {short: 'spaceB', title: 'Meeting Point Space B'}
    ];

    $scope.display = {
      availability: true,
      full: false,
      court: false,
      booking: {
        full: false,
        court: false,
      }
    };

    for(item in $scope.locations){
      $scope.display[item.short] = false;
      $scope.display.booking[item.short] = false;
    }

    $scope.year = calendarFactory.getYear;
    $scope.month = calendarFactory.getMonth;
    $scope.day = calendarFactory.getDay;

    $scope.dateString = availabilityFactory.createDateFormat;
    $scope.startTime = availabilityFactory.startTime;
    $scope.endTime = availabilityFactory.endTime;
    $scope.timeslots = availabilityFactory.spaces;
    $scope.getSlots = availabilityFactory.getSlots;
    $scope.bookSlot = availabilityFactory.bookSlot;

    $scope.getRates = ratesFactory.getRates;

    $scope.durations = {};
  }
]);