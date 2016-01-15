angular.module('Calendar.config', ['ionic'])

.config(calendarConfig);

calendarConfig.$inject = ['$stateProvider', '$urlRouterProvider']

function calendarConfig($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'layout/home.html'
    })

  $urlRouterProvider.otherwise('/home');

}
