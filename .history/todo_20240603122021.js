

const storedTasks =
JSON.parse(localStorage.getItem('tasks')) || []


const renderTasks = () => {
    storedTasks.forEach((task) => {
    taskList.insertAdjacentHTML(
    'beforeend',
    createTaskItem(task)
    )
    })
    }
    window.onload = renderTasks
    const taskInput = document.querySelector('#taskInput')
    const taskList = document.querySelector('#taskList')
    const addTaskForm = document.querySelector(
    '#addTaskForm'
    )
    taskList.style = `
    list-style: none;
    margin-top: 1rem;
    font-size: 1.5rem;
    `
    const createTaskItem = (task) => `
    <li>
    <input type="checkbox" name="task" value="${task}">
    <label for="task">${task}</label>
    <button type="button">
    X
    </button>
    </li>
    ` 

    const addTask = (event) => {
        event.preventDefault()
        const task = taskInput.value
        const taskItem = createTaskItem(task)
        taskList.insertAdjacentHTML('beforeend', taskItem)
        storedTasks.push(task)
        localStorage.setItem(
        'tasks',
        JSON.stringify(storedTasks)
        )
        addTaskForm.reset()
        }
        addTaskForm.addEventListener('submit', addTask)
