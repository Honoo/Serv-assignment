angular.module('calendarModule',[])
.directive('calendar',function(){
  return {
    restrict: 'E',
    templateUrl: 'app/calendar/calendar.html',
    link: link
  }

  function link($scope, element, attrs){
    $scope.weeks = getWeeks($scope, $scope.year(), $scope.month());
  }

  // Formats calendar elements
  function getWeeks($scope, year, month){
    var weeks = [];
    var totalDays = $scope.months[month].days;
    if (month == 1 && $scope.isLeapYear(year)){
      totalDays++;
    }

    weeks.push({ days: [] });
    var weeksIndex = 0;

    // Initialize blank spaces for first week
    var firstDate = new Date(year, month, 1);
    var firstDay = firstDate.getDay();
    for(i = 0; i < firstDay; i++){
      weeks[weeksIndex].days.push({ date: '' });
    }

    for(i = 1; i <= totalDays; i++){
      var current = new Date(year, month, i);
      weeks[weeksIndex].days.push({ date: i });

      if(current.getDay() == 6){
        weeks.push({ days: [] });
        weeksIndex++;
      } 
    }

    return weeks;
  }
})
.controller("CalendarController", ['$scope', 'calendarFactory', function($scope, calendarFactory){
  // Initialize calendar to current month
  $scope.year = calendarFactory.getYear;
  $scope.month = calendarFactory.getMonth;
  $scope.day = calendarFactory.getDay;

  $scope.changeDate = calendarFactory.changeDate;

  $scope.months = [
                    {name: 'January', short: 'Jan', days: 31},
                    {name: 'February', short: 'Feb', days: 28},
                    {name: 'March', short: 'Mar', days: 31},
                    {name: 'April', short: 'Apr', days: 30},
                    {name: 'May', short: 'May', days: 31},
                    {name: 'June', short: 'Jun', days: 30},
                    {name: 'July', short: 'Jul', days: 31},
                    {name: 'August', short: 'Aug', days: 31},
                    {name: 'September', short: 'Sep', days: 30},
                    {name: 'October', short: 'Oct', days: 31},
                    {name: 'November', short: 'Nov', days: 30},
                    {name: 'December', short: 'Dec', days: 31}
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
        return false;
      }
      else {
        return true;
      }
    }
    else {
      return false;
    }
  }
}]);