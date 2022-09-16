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
        $scope.flag = 0

        // $scope.print = function () {
        //     console.log($scope.username)
        // }

        $scope.todoList = [
            {name: "Sohan", username: "ssohan", done:"false"}
        ]

        $scope.addTodo = function () {
            if ($scope.name && $scope.username) {
                // console.log($scope.name + ' ' + $scope.username)
                $scope.todoList.forEach(function (element) {
                    // console.log(element.name)
                    // console.log(element.username)
                    $scope.flag = 0
                    if (element.username == $scope.username) {
                        $scope.flag = 1
                        $scope.message = "User already exists";
                    }
                })
                if (!$scope.flag) {
                    $scope.todoList.push({name: $scope.name, username: $scope.username, done: $scope.is_checked});
                }
            } else if (!$scope.name || !$scope.username) {
                $scope.message = "Name or Username fields can not be empty";
            }
        }

        $scope.removeItem = function (x) {
            return $scope.todoList.splice(x,1)
        }


    };
})(); 