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
                .then(function (todos) {
                    $scope.todos = todos.data;
                });
        }

        function addTodo(inputTodo) {

            var newTodo = angular.copy(inputTodo);
            $http.post('/api/todo',newTodo);
            findAllTodos();
        }

        // todo is the loop index from the view
        function removeTodo(todo) {

            $http.delete('/api/todo/'+todo._id)
                .then(findAllTodos);
        }

        function selectTodo(todoId) {
            $http.get("/api/todo/"+todoId)
                .then(function (todo){
                console.log(todo);
                    $scope.inputTodo=todo.data;
                });
        }

        function updateTodo(todo) {
            //$scope.todos[$scope.selectedIndex]=angular.copy(todo);
            $http
                .put("/api/todo/"+todo._id, todo)
                .then(findAllTodos);
        }
    }
})();