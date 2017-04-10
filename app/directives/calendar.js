angular.module('calendarModule',[])
.directive('calendar',function(){

  return {
    restrict: 'E',
    template: 'Testing',
  };
})
.controller("CalendarController", function($scope){
  $scope.months = [
                    {id: 1, name: 'January', short: 'Jan', days: 31},
                    {id: 2, name: 'February', short: 'Feb', days: 28},
                    {id: 3, name: 'March', short: 'Mar', days: 31},
                    {id: 4, name: 'April', short: 'Apr', days: 30},
                    {id: 5, name: 'May', short: 'May', days: 31},
                    {id: 6, name: 'June', short: 'Jun', days: 30},
                    {id: 7, name: 'July', short: 'Jul', days: 31},
                    {id: 8, name: 'August', short: 'Aug', days: 31},
                    {id: 9, name: 'September', short: 'Sep', days: 30},
                    {id: 10, name: 'October', short: 'Oct', days: 31},
                    {id: 11, name: 'November', short: 'Nov', days: 30},
                    {id: 12, name: 'December', short: 'Dec', days: 31}
                  ];

  $scope.days = [
                  {name: 'Sunday', short: 'Sun'},
                  {name: 'Monday', short: 'Mon'},
                  {name: 'Tuesday', short: 'Tue'},
                  {name: 'Wednesday', short: 'Wed'},
                  {name: 'Thursday', short: 'Thu'},
                  {name: 'Friday', short: 'Fri'},
                  {name: 'Saturday', short: 'Sat'}
                ];

  $scope.isLeapYear = function(year){
    year = parseInt(year);

    if(year%4 == 0){
      if(year%400 == 0){
        return true;
      }
      else if(year%100 == 0){
        return false
      }
      else {
        return true;
      }
    }
    else {
      return false;
    }
  }
});