angular.module('Calendar.directive', ['Calendar.controller'])

.directive('calendarDir', function() {
  return {
    restrict: 'AE',
    controller: 'CalendarDirCtrl',
    controllerAs: 'CalendarDir',
    templateUrl: '../calendar/calendar.html'
  };
})
