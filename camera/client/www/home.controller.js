angular.module('camera.home', ['ionic', 'camera.resource', 'camera.directives'])

.controller('HomeCtrl', HomeCtrl)

HomeCtrl.$inject = ['$scope', 'resource', 'img']

function HomeCtrl($scope, resource, img) {

  var Home = this;
  Home.send = send;
  Home.getPicture = getPicture;
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
        alert('Image sent!');
      })
      .catch(function(error) {
        console.log(error)
        alert('Something went wrong!');
      })
  }

  function getPicture(){
    var options = {
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      saveToPhotoAlbum: false
    }

    resource.getPicture(options)
    .then(function(imageURI){
      console.log(imageURI)
      Home.latestPhoto = imageURI;
    })
    .catch(function(error){
      console.log(error)
    })

  }

}
