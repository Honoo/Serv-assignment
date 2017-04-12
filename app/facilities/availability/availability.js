angular.module('facilitiesModule.availability',[])
.directive('availability',function(){
  return {
    restrict: 'E',
    templateUrl: 'app/facilities/availability/availability.html',
  }
})
.controller("AvailabilityController", ['$scope', 'availabilityFactory', function($scope, availabilityFactory){
  $scope.locations = ['roomA', 'roomB', 'spaceA', 'spaceB', 'full', 'court'];

  $scope.display = {
    availability: true,
    booking: {}
  };

  for(item in $scope.locations){
    $scope.display[item] = false;
    $scope.display.booking[item] = false;
  }

  $scope.year = 2017;
  $scope.month = 3;
  $scope.day = 11;

  $scope.dateString = availabilityFactory.createDateFormat($scope.year, $scope.month, $scope.day);
  $scope.startTime = availabilityFactory.startTime;
  $scope.endTime = availabilityFactory.endTime;

  // Initialize all timeslots for the current date
  for(space in availabilityFactory.spaces){
    availabilityFactory.checkDate(space, $scope.year, $scope.month, $scope.day);
  }

  $scope.timeslots = availabilityFactory.spaces;
  $scope.bookSlot = availabilityFactory.bookSlot;
  $scope.durations = {};
}]);