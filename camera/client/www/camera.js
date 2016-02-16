// Ionic camera

angular.module('camera', ['ionic', 'camera.config', 'camera.directives'])

.run(camera)

camera.$inject = ['$ionicPlatform']

function camera($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
    if (window.navigator){
      console.log("navigator is ok!");
    }
  });
}
