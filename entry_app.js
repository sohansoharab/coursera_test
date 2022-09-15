(function() {
    'use strict';
    angular.module('EntryApp', [])
    .controller('EntryAppController', EntryAppController);

    EntryAppController.$inject = ['$scope'];

    function EntryAppController ($scope) {
        $scope.name = ""
        $scope.username = ""
        $scope.is_checked = "false"
        $scope.message = ""
        $scope.status_class = ""

        // $scope.print = function () {
        //     console.log($scope.username)
        // }

        $scope.todoList = [
            {name: "Sohan", username: "ssohan", done:"false"}
        ]

        $scope.addTodo = function () {
            if ($scope.name && $scope.username) {
                $scope.todoList.forEach(function (element) {
                    if ($scope.username !== element.username) {
                        console.log(element)
                        $scope.todoList.push({name: $scope.name, username: $scope.username, done: $scope.is_checked});
                        $scope.message = "";
                        $scope.status_class = "green";
                    } else if ($scope.username == element.username) {
                        $scope.message = "User already exists";
                    }
                })
            } else if (!$scope.name || !$scope.username) {
                
                $scope.message = "Name or Username fields can not be empty";
                $scope.status_class = "red";

            }
            
        }

        $scope.removeItem = function (x) {
            return $scope.todoList.splice(x,1)
        }


    };
})(); 