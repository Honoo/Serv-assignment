// Maintain a common date
angular.module('calendarModule')
.factory('calendarFactory', function() {
  var calendarFactory = {};

  var now = new Date();
  calendarFactory.year = now.getFullYear();
  calendarFactory.month = now.getMonth();
  calendarFactory.day = now.getDate();

  calendarFactory.getYear = function(){
    return calendarFactory.year;
  }
  calendarFactory.getMonth = function(){
    return calendarFactory.month;
  }
  calendarFactory.getDay = function(){
    return calendarFactory.day;
  }

  calendarFactory.changeDate = function(year, month, day){
    calendarFactory.year = parseInt(year);
    calendarFactory.month = parseInt(month);
    calendarFactory.day = parseInt(day);
  }

  return calendarFactory;
});