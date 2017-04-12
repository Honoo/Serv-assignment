// Maintain information about timeslots
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

  timeslots.getStartTime = function(){
    return timeslots.startTime;
  }

  timeslots.getEndTime = function(){
    return timeslots.endTime;
  }

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

  timeslots.getSlots = function(location, year, month, day){
    timeslots.checkDate(location, year, month, day);
    var date = timeslots.createDateFormat(year, month, day);
    return timeslots.spaces[location][date];
  }

  // Duration should be an integer representing hours
  timeslots.bookSlot = function(location, year, month, day, time, duration){
    var date = timeslots.createDateFormat(year, month, day);
    time = parseInt(time);
    duration = parseInt(duration);

    if(time < timeslots.startTime || time+duration > timeslots.endTime){
      return false;
    }

    if(location == 'court' && duration%2 != 0){
      return false;
    }

    for(i = time; i < time+duration; i++){
      if(location == 'full' && (timeslots.isSlotBooked('spaceA', year, month, day, i) || timeslots.isSlotBooked('spaceB', year, month, day, i))){
        return false;
      }
      else if(location != 'full' && timeslots.isSlotBooked(location, year, month, day, i)){
        return false;
      }
    }

    for(i = time; i < time+duration; i++){
      if(location == 'full'){
        timeslots.spaces['spaceA'][date][i] = true;
        timeslots.spaces['spaceB'][date][i] = true;
      }
      else {
        timeslots.spaces[location][date][i] = true;
      }
    }

    return true;
  };

  return timeslots;
})