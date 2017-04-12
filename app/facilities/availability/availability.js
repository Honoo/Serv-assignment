angular.module('facilitiesModule.availability',[])
.directive('availability',function(){
  return {
    restrict: 'E',
    templateUrl: 'app/facilities/availability/availability.html',
  }
})
.controller("AvailabilityController", ['$scope', 'availabilityFactory', 'calendarFactory', 
  function($scope, availabilityFactory, calendarFactory){
    $scope.locations = ['roomA', 'roomB', 'spaceA', 'spaceB', 'full', 'court'];

    $scope.display = {
      availability: true,
      booking: {}
    };

    for(item in $scope.locations){
      $scope.display[item] = false;
      $scope.display.booking[item] = false;
    }

    $scope.year = calendarFactory.getYear;
    $scope.month = calendarFactory.getMonth;
    $scope.day = calendarFactory.getDay;

    $scope.dateString = availabilityFactory.createDateFormat;
    $scope.startTime = availabilityFactory.startTime;
    $scope.endTime = availabilityFactory.endTime;

    // Initialize all timeslots for the current date
    for(space in availabilityFactory.spaces){
      availabilityFactory.checkDate(space, $scope.year(), $scope.month(), $scope.day());
    }

    $scope.timeslots = availabilityFactory.spaces;
    $scope.getSlots = availabilityFactory.getSlots;
    $scope.bookSlot = availabilityFactory.bookSlot;
    $scope.durations = {};
  }
]);