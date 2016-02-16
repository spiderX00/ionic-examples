angular.module('camera.resource', ['ionic', 'camera.constants'])

.service('resource', resource)

resource.$inject = ['$http', 'callback']

function resource($http, callback) {

  var service = {
    sendImage: sendImage
  }

  return service;

  function sendImage(image) {
    var args = JSON.stringify({
      imageData: {
        image: image
      }
    })

    return $http({
        method: "POST",
        url: '/image/',
        data: args
      })
      .then(callback.success)
      .catch(callback.failed)
  }


}
