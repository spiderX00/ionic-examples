angular.module('Calendar.controller', ['ionic', 'ui.calendar', 'angularMoment', 'Calendar.utils'])

.controller('CalendarDirCtrl', CalendarDirCtrl)

CalendarDirCtrl.$inject = ['$scope', '$filter', 'moment', 'uiCalendarConfig', 'calendarAttr']

function CalendarDirCtrl($scope, $filter, moment, uiCalendarConfig, calendarAttr) {

  var CalendarDir = this;
  CalendarDir.setCalDate = setCalDate;
  CalendarDir.name = calendarAttr.name;

  CalendarDir.calendarDate = [{
    events: [{
      title: 'From',
      start: '2015-01-31',
      allDay: true,
      rendering: 'background'
    }, ],
  }];

  function setCalDate(date, jsEvent, view) {
    var selectedDate = moment(date).format(calendarAttr.dateFormat);
    CalendarDir.calendarDate[0].events[0].start = selectedDate;
    CalendarDir.selectedDate = $filter('date')(selectedDate, calendarAttr.dateFormat);
    console.log('uiConfig', CalendarDir.uiConfig);
    console.log('uiCalendarConfig', uiCalendarConfig);
  };

  CalendarDir.uiConfig = {
    calendar: {
      editable: false,
      aspectRatio: 2,
      header: {
        left: '',
        center: 'title',
        right: 'today prev,next'
      },
      defaultView: 'basicWeek',
      dayClick: CalendarDir.setCalDate
    },
  };
}
