// fetch('/todos').then((res) => {
//     console.log(res);
//     console.log(res.json());
// })

// Promise<Response>(fetch의 응답객체) : pending(대기) -> fullfilled(응답 도착) -> rejected(에러 발생)
// document.querySelector('.todos').innerHTML = `
//     <li>HTML</li>
//     <li>CSS</li>
//     <li>Javascript</li>
// `

// console.dir();

let todos = []; // state

const $todos = document.querySelector('.todos');
const $todoInput = document.querySelector('.todo-input');
const $form = document.querySelector('form');

const render = () => {
    $todos.innerHTML =
        todos.map(todo =>
            `<li id="${todo.id}">
                <input type="checkbox" ${todo.completed ? 'checked' : ''}/>
                <span>${todo.content}</span>
                <button class="remove">X</button>
            </li>`
        ).join('')
}

// Math.max(...[1, 2, 3])
// Math.max()
const generateNextId =
    () => todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

const fetchTodos = async () => {
    const res = await fetch('/todos')

    todos = await res.json();

    render()
}

const AddTodo = async (content) => {
    const res = await fetch('/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: generateNextId(), content, completed: false })
    });

    todos = await res.json();
    render();
};

const toggleTodo = async (id, completed) => {
    const res = await fetch(`/todos/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed })
    });

    todos = await res.json();
    render();
}

window.onload = fetchTodos;

$form.onsubmit = e => {
    e.preventDefault();
    console.log('onsubmit')

    const content = $todoInput.value;
    $todoInput.value = '';
    $todoInput.focus();

    AddTodo(content);
}

$todos.onchange = e => {
    const id = e.target.parentNode.id; // 부모 노드로 이동 
    const completed = e.target.checked; // 실제로 이벤트를 발생시킨 노드(html 태그)

    console.log(id);
    console.log(completed);

    toggleTodo(id, completed);
};

$todos.onclick = async e => {
    if (!e.target.classList.contains('remove')) return;

    const id = e.target.parentNode.id;

    const res = await fetch(`/todos/${id}`, { method : 'DELETE'})
    todos = await res.json();
    render();
}

// document.querySelector('.add').onclick = async () => {
//     const content = $todoInput.value;
//     $todoInput.value = '';
//     $todoInput.focus();

//     AddTodo(content);
// }

// $todoInput.onkeyup = e => {
//     if (e.key !== 'Enter') return;

//     const content = $todoInput.value;
//     $todoInput.value = '';
//     $todoInput.focus();

//     AddTodo(content);
// };