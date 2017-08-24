module.exports=function (app) {
    var todos = [
        {title:'todo 1', details:'details 223'},
        {title:'todo 2', details:'details 223'},
        {title:'todo 3', details:'details 223'}
    ];

    app.get('/api/todo', findAllTodos);
    app.get('/api/todo/:id', findTodoByIndex);
    app.delete('/api/todo/:id',deleteTodo);

    function findAllTodos(req,res) {
        res.json(todos);
    }

    function findTodoByIndex(req,res) {
        var index=req.params['id'];
        res.json(todos[index]);
    }
    function deleteTodo(req,res) {
        var index=req.params['id'];
        todos.splice(index,1);
        res.json(todos)
    }
};