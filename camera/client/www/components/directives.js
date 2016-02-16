angular.module('camera.directives', ['ionic'])

.directive('customOnChange', function($parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      var onChangeHandler = scope.$eval(attrs.customOnChange);
      var file = angular.fromJson(element["0"].files);
      console.log(file)
      element.bind('change', onChangeHandler);
    }
  };
})
