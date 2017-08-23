(function () {
    angular
        .module("TodoApp",[])
        .controller("TodoListController",todoListController);

    function todoListController($scope) {
        $scope.inputTodo = {title:"initial title",details:"initial details"};
        $scope.todos = [];
        // mapping view to local fn
        $scope.addTodo = addTodo;
        $scope.removeTodo = removeTodo;
        $scope.selectTodo=selectTodo;
        $scope.updateTodo=updateTodo;

        function addTodo(inputTodo) {

            // var newTodo = {
            //     title:inputTodo.title
            // }

            var newTodo = angular.copy(inputTodo)
            console.log(newTodo);

            $scope.todos.push(newTodo);
        }

        // todo is the loop index from the view
        function removeTodo(todo) {
            //calcuate index since todo is an obj and splice needs an index
            var index=$scope.todos.indexOf(todo)
            $scope.todos.splice(index,1);
        }

        function selectTodo(index) {
            $scope.inputTodo=angular.copy($scope.todos[index]);
            $scope.selectedIndex=index;
        }

        function updateTodo(todo) {
            $scope.todos[$scope.selectedIndex]=angular.copy(todo);
        }
    }
})();