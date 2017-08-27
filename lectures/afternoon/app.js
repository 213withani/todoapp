module.exports=function (app,TodoModel) {
    var todos = [
        {title:'todo 1', details:'details 223'},
        {title:'todo 2', details:'details 223'},
        {title:'todo 3', details:'details 223'}
    ];

    app.post('/api/todo', createTodo);
    app.get('/api/todo', findAllTodos);
    app.get('/api/todo/:id', findTodoByIndex);
    app.delete('/api/todo/:id',deleteTodo);
    app.put('/api/todo/:id',updateTodo);

    function createTodo(req,res) {
        var post = req.body;
        TodoModel
            .create(post)
            .then(findAllTodos);
    }

    function findAllTodos(req,res) {
        TodoModel
            .find()
            .then(function (todos) {
                res.json(todos);
            },
            function (error) {
                res.sendStatus(400);
            });

    }

    function findTodoByIndex(req,res) {
        var todoId=req.params['id'];
        
        TodoModel
            .findById(todoId)
            .then(function (todo) {
                res.json(todo);
            },
            function (error) {
                res.sendStatus(400);
            });
    }

    function deleteTodo(req,res) {
        var todoId=req.params['id'];
        TodoModel.remove({_id:todoId})
            .then(
            function (status) {
                res.sendStatus(200);
                findAllTodos();
            },
            function (error) {
                res.sendStatus(400);
            }
        );
    }
    
    function updateTodo(req,res) {
        var todoId=req.params.id;
        var todo=req.body;
        TodoModel
            .update({_id:todoId}, {
                title:todo.title,
                body: todo.details
            })
            .then(function (status) {
                res.sendStatus(200);
            },
            function (error) {
                res.sendStatus(400);
            })
    }
};