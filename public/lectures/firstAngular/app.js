(function () {
    angular
        .module("TodoApp",[])
        .controller("TodoListController",todoListController);

    function todoListController($scope) {
        $scope.inputTodo = {title:"initial title"};
        $scope.todos = [];
        // mapping view to local fn
        $scope.addTodo = addTodo;
        $scope.removeTodo = removeTodo;

        function addTodo(inputTodo) {

            var newTodo = {
                title:inputTodo.title
            }

            console.log(newTodo);

            $scope.todos.push(newTodo);
        }

        function removeTodo(todo) {
            $scope.todos.splice(todo,1);
        }
    }
})();