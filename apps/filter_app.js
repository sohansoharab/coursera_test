(function () {
    'use strict';
    
    angular.module('filterApp', [])
    .controller('filterAppController', filterAppController)
    .filter('Custom', CustomFilterFactory)
    .filter('Custom__2', CustomFilterFactory__2);

    // To use custom filters, First we need to define a custom filter factory function below the controller function
    // Then we need to register this factory function like above, 
    // By default in [.filter('Custom'),..], Angular automatically adds Filter keyword end of the word 'Custom',
    // In case of using the filter in HTML, syntax is {{ msg | Cutom }}
    // So, during the injection, we need to use ['Custom' + 'Filter'] = 'CustomFilter'
    // We also need to pass it as argument to controller function to use it 

    filterAppController.$inject = ['$scope', '$filter', 'CustomFilter', 'Custom__2Filter'];

    function filterAppController ($scope, $filter, CustomFilter, Custom__2Filter) {
        $scope.msg = "I eat rice";
        $scope.msg2 = ""
        $scope.friends = [{name:'John', phone:'555-1276', balance: 10},
                         {name:'Mary', phone:'800-BIG-MARY', balance: 20},
                         {name:'Mike', phone:'555-4321', balance: 14},
                         {name:'Adam', phone:'555-5678', balance: 16},
                         {name:'Julie', phone:'555-8765', balance: 16},
                         {name:'Juliette', phone:'555-5678', balance: 19}]

        $scope.msgUpper = function () {
            $scope.msg = $filter('uppercase')($scope.msg);
            return $scope.msg
        };

        $scope.msgLower = function () {
            $scope.msg = $filter('lowercase')($scope.msg);
            return $scope.msg
        };

        $scope.convert2currency = function (item) {
            item = $filter('currency')(item, 'USD ', 5)
            return item
        };

        $scope.CustomFilterMsg = function () {
            return CustomFilter($scope.msg)
        }

        $scope.Custom__2FilterMsg = function () {
            return Custom__2Filter($scope.msg, "rice", "Biriyani")
        }

    };

    function CustomFilterFactory () {
        return function (input) {
            input = input || "";
            input = input.replace("rice", "potato");
            return input
        }
    };

    function CustomFilterFactory__2 () {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input
        }
    };

})();