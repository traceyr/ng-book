'use strict';

// function MyController($scope){
//   $scope.clock = {
//     now: new Date()
//   };
//   function updateClock(){
//     $scope.clock.now = new Date();
//   }
//   setInterval(function(){
//     $scope.$apply(updateClock);
//   }, 1000);
//   updateClock();
// };

// angular.module('myApp', [])
//   .run(function($rootScope){
//     $rootScope.name = 'World';
//   });

angular.module('myApp', [])
  .controller('MyController', function($scope){
    $scope.name = 'Ari';
  });
