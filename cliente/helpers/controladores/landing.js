angular.module('sketch')
.controller('ctrlLanding', ['$scope','$state', function ($scope,$state) {
  $state.go('frontPage.main');
}]);
