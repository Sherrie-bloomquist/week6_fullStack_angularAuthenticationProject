var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home', {
    templateUrl: 'views/partials/home.html',
  })
  .when('/add', {
    templateUrl: 'views/partials/add.html',
    controller: 'AddController'
  })
  .when('/login', {
    templateUrl: 'views/partials/login.html',
    controller: 'LoginController'
  })
  .when('/register', {
    templateUrl: 'views/partials/register.html',
    controller: 'registerController'
  })
  .otherwise({
    redirectTo: 'home'
  });
}]);//end routeProvider

myApp.controller('LoginController',['$scope', '$http', '$window',
  function($scope, $http, $window) {
  console.log('inside main controller');

  $scope.login = function(){

    var userInfo = {
      username: $scope.username,
      password: $scope.password
    };

    $http({
      method: 'POST',
      url: '/',
      data: userInfo
    }).then(function successCallback(response) {
      console.log(response);
      $window.location.href = '/home';
    }, function errorCallback(error) {
      console.log('error', error);
      $window.location.href = '/';
    });
  };
}]);

myApp.controller('registerController',['$scope', '$http', '$window',
  function($scope, $http, $window) {
  console.log('inside register controller');

  $scope.register = function() {
    var userInfo = {
      username: $scope.username,
      password: $scope.password
    };

    $http({
      method: 'POST',
      url: '/register',
      data: userInfo
    }).then(function successCallback(response) {
      console.log('success', response);
      $window.location.href = '/';
    }, function errorCallback(error) {
      console.log('error occurred!');
    });
  };

}]);

myApp.controller('AddController', ['$scope', '$http', function($scope, $http){
  console.log('in AddController');
}]);//end AddController
