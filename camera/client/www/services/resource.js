angular.module('camera.resource', ['ionic', 'camera.constants'])

.service('resource', resource)

resource.$inject = ['$http', '$q', 'callback']

function resource($http, $q, callback) {

  var service = {
    sendImage: sendImage,
    getPicture: getPicture
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

  function getPicture(options){
    function success(result){
      q.resolve(result)
    }
    function failed(error){
      q.reject(error)
    }

    var q = $q.defer();
    navigator.camera.getPicture(success, failed, options);
    
    return q.promise;
  }
}
