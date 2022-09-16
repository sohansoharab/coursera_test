(function() {
    'use strict';
    
    // 'MainPageApp' is the Angular App name
    // 'MainPageController' is the controller of it, where the same name also denotes the controlling function
    
    angular.module('MainPageApp', [])
    .controller('MainPageController', MainPageController);

    // Injecting special deliverables/objects/objects manually helps to protect the controller during minification.

    // Keywords having '$' are special deliverables in Angular
    // '$scope' acts as the 'self' in python function/OOP classes
    // Everything under this app goes inside the controller function

    MainPageController.$inject = ['$scope'];

    function MainPageController($scope) {
        $scope.apps = [
            {title: "Data Entry", link: "html/data_entry.html", description: "Simple Data Entry App (Without Database)"},
            {title: "Filter", link: "html/filter_.html", description: "Simple Filtering Option using both html and Angular"},
        ]
        // $scope.app1_name = "Data Entry";
        // $scope.app1_description = "Simple Data Entry App (Without Database)"
        
    }
})();