// public/app.js
const getTask = () => {
    axios.get('/tasks')
    .then((response) => {
        const tasks = response.data;
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.textContent = task.text + ' - ' + task.priority + ' - ' + task.deadline;
            todoList.appendChild(li);
        });
    })
    .catch((error) => {
        console.error(error);
    });
};

// test for the comment thing cuz i want to see how to 
// comments look like in diffrent themes

const addTask = () => {
    axios.post('/add', {
        text: document.getElementById('new-task').value,
        priority: document.getElementById('priority').value,
        deadline: document.getElementById('deadline').value
    })
    .then((response) => {
        document.getElementById('new-task').value = '';
        document.getElementById('priority').value = 'high';
        document.getElementById('deadline').value = '';
        getTask();
    })
    .catch((error) => {
        console.error(error);
    });
};




getTask();