//element variables
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


//Load the tasks after the HTML has parsed and loaded
document.addEventListener('DOMContentLoaded', loadTasks);


//adding tasks
addTaskBtn.addEventListener('click', () =>{
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask (taskText);
        saveTask(taskText);
        taskInput.value = '';
    }
})

function addTask(taskText){
    const li = document.createElement('li');
    li.textContent = taskText;
}

li.addEventListener('click', () =>{
    li.classList.toggle('completed');
});



//saving tasks
function saveTask(taskText){
    let task = JSON.parse(localStorage.getItem('tasks')) || [];
    task.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//loading tasks
function loadTask() {
    const tasks =JSON.parse(localStorage.getItem('tasks')) || [];
    task.forEach(addTask);
}

// Delete task from localStorage
function deleteTask(taskText) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }