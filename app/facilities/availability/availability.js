angular.module('facilitiesModule.availability',[])
.directive('availability',function(){
  return {
    restrict: 'E',
    templateUrl: 'app/facilities/availability/availability.html',
  }
})
.controller("AvailabilityController", ['$scope', 'availabilityFactory', function($scope, availabilityFactory){
  $scope.display = {
    availability: true,
    roomA: false,
    roomB: false,
    spaceA: false,
    spaceB: false,
    full: false,
    court: false
  };

  $scope.toggleDisplay = function(type){
    $scope.display[type] = !$scope.display[type];
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
}]);