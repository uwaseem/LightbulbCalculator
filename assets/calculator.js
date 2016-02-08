/* JavaScript Document */
(function() {
  var app = angular.module('myCalculator', []);

  app.controller('CalculatorController', ['$scope', function($scope){
    $scope.LUMEN_OPTIONS = [375, 600, 900, 1125, 1600];
    $scope.currentLumens = 600;
    $scope.currentCost = 12;
    $scope.currentHours = 3;
    $scope.TOTAL_DAYS = 365;

    $scope.INC_CONVERSION = .0625;
    $scope.HAL_CONVERSION = .0450;
    $scope.CFL_CONVERSION = .0146;
    $scope.LED_CONVERSION = .0125;

    $scope.calculate = function() {
      console.log('calcualting');
      $scope.incWattage = ($scope.currentLumens * $scope.INC_CONVERSION).toFixed(2);
      $scope.halWattage = ($scope.currentLumens * $scope.HAL_CONVERSION).toFixed(2);
      $scope.cflWattage = ($scope.currentLumens * $scope.CFL_CONVERSION).toFixed(2);
      $scope.ledWattage = ($scope.currentLumens * $scope.LED_CONVERSION).toFixed(2);
    }

    $scope.calculate();
  }]);
})();


