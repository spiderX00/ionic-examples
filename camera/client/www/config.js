angular.module('camera.config', ['ionic', 'camera.home'])

.config(config)

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

function config($stateProvider, $urlRouterProvider, $locationProvider) {

  /*
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  */

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeCtrl as Home'
    })

  $urlRouterProvider.otherwise('home');
}
