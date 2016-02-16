angular.module('camera.constants', [])

.constant('callback', {
  success: function(data){
    return data;
  },
  failed: function(error){
    return error;
  }
})

.constant('img', {
  default: '/contents/img/ionic.png'
})
