(function() {
    'use strict';
    angular.module('MainPageApp', [])
    .controller('MainPageController', MainPageController);

    MainPageController.$inject = ['$scope'];

    function MainPageController($scope) {
        $scope.app1_name = "Data Entry";
        $scope.app1_description = "Simple Data Entry App (Without Database)"

    }
})();