angular.module('facilitiesModule.availability')
.factory('availabilityFactory', function() {
  var timeslots = {};

  timeslots.spaces = {
    roomA: {},
    roomB: {},
    spaceA: {},
    spaceB: {},
    court: {}
  };

  timeslots.startTime = 8; //8am
  timeslots.endTime = 22; // 10pm

  timeslots.createDateFormat = function(year, month, day){
    return year.toString() + "-" + month.toString() + "-" + day.toString();
  }

  timeslots.checkDate = function(location, year, month, day){
    var date = timeslots.createDateFormat(year, month, day);
    if(!timeslots.spaces[location][date]){
      timeslots.spaces[location][date] = {};

      // Initialize all timeslots to free
      for(i = timeslots.startTime; i < timeslots.endTime; i++){
        timeslots.spaces[location][date][i] = false;
      }
    }
  };

  timeslots.isSlotBooked = function(location, year, month, day, time){
    timeslots.checkDate(location, year, month, day);

    var date = timeslots.createDateFormat(year, month, day);
    return timeslots.spaces[location][date][time];
  };

  // Duration should be an integer representing hours
  timeslots.bookSlot = function(location, year, month, day, time, duration){
    if(time < timeslots.startTime || time >= timeslots.endTime){
      return false;
    }

    if(location == 'court' && duration%2 != 0){
      return false;
    }

    for(i = time; i < time+duration; i++){
      if(timeslots.isSlotBooked(location, year, month, day, time)){
        return false;
      }
    }

    for(i = time; i < time+duration; i++){
      timeslots.spaces[location][date][time] = true;
    }

    return true;
  };

  return timeslots;
})