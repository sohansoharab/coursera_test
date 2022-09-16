(function () {
'use strict'

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
    $scope.num1 = 0;
    $scope.num2 = 0;

    $scope.add = function (num1, num2) {
        return num1 + num2
    };

    $scope.subs = function (num1, num2) {
        return num1 - num2
    };

    $scope.multiply = function (num1, num2) {
        return num1 * num2
    };

    $scope.devide = function (num1, num2) {
        return num1 / num2
    };

});

})();

