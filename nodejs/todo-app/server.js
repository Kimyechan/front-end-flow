const express = require('express');
const app = express();
// const cors = require('cors');

const port = 9000

let todos = [
    {id : 1, content : 'HTML', completed: false},
    {id : 2, content : 'CSS', completed: true},
    {id : 3, content : 'Javascript', completed: false}
]

// app.use(cors);
app.use(express.static('public'));
app.use(express.json());

app.get('/todos', (req, res) => {
    todos = todos.sort((todo1, todo2) => {
        return todo2.id - todo1.id
    });

    res.send(todos);
})

app.post('/todos', (req, res) => {
    todos = [req.body, ...todos];
    res.send(todos);
})

app.patch("/todos/:id", (req, res) => {
    const id = +req.params.id;
    const completed = req.body.completed;
    console.log(req.body);

    todos = todos.map(todo => todo.id === id ? { ...todo, completed} : todo);
    console.log(todos);
    res.send(todos);
})

app.delete('/todos/:id', (req,res) => { 
    const id = +req.params.id;
    console.log(id);

    todos = todos.filter(todo => todo.id !== id)

    res.send(todos);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})