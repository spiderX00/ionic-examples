// Calendar

angular.module('Calendar', [
    'ionic',
    'ngCordova',
    'ui.calendar',
    'Calendar.config',
    'Calendar.directive',    
  ])

.run(Calendar)

Calendar.$inject = ['$ionicPlatform', '$window']

function Calendar($ionicPlatform, $window) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}
