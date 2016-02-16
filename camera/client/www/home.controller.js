angular.module('camera.home', ['ionic', 'camera.resource', 'camera.directives'])

.controller('HomeCtrl', HomeCtrl)

HomeCtrl.$inject = ['$scope', 'resource', 'img']

function HomeCtrl($scope, resource, img) {

  var Home = this;
  Home.send = send;
  Home.uploadFile = uploadFile;

  function uploadFile(event) {
    var file = event.currentTarget.files[0];
    console.log(file)

    var reader = new FileReader()
    reader.onload = function(event) {
      $scope.$apply(function($scope) {
        Home.image = event.target.result;
      });
    }
    reader.readAsDataURL(file);
  }

  function send() {
    //console.log(Home.image)
    resource.sendImage(Home.image)
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  }

}
