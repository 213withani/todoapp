(function () {
    angular
        .module("TodoApp",[])
        .controller("TodoListController",todoListController);

    function todoListController($scope,$http) {
        $scope.inputTodo = {title:"initial title",details:"initial details"};

        // mapping view to local fn
        $scope.addTodo = addTodo;
        $scope.removeTodo = removeTodo;
        $scope.selectTodo=selectTodo;
        $scope.updateTodo=updateTodo;

        function init() {
            findAllTodos();
        }
        init();

        function findAllTodos() {
            $http.get('/api/todo')
                .then(function (response) {
                    console.log(response);
                    $scope.todos = response.data;
                });
        }

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
            $http.delete('/api/todo/'+index)
                .then(findAllTodos());
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