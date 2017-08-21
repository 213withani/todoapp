(function () {
    angular
        .module("TodoApp",[])
        .controller("TodoListController",todoListController);

    function todoListController($scope) {
        $scope.todo = {title:"initial title"};
        $scope.addTodo = addTodo;

        function addTodo(todo) {
            console.log(todo)
        }
    }
})();