let tasks = [];
let filter = 'all';

function addTask() {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, completed: false });
    input.value = '';
    renderTasks();
  }
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    if (
      filter === 'all' ||
      (filter === 'active' && !task.completed) ||
      (filter === 'completed' && task.completed)
    ) {
      const li = document.createElement('li');
      li.innerHTML = `
        <input type="checkbox" onclick="toggleTask(${index})" ${task.completed ? 'checked' : ''}>
        <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
        <button onclick="deleteTask(${index})">x</button>
      `;
      list.appendChild(li);
    }
  });
}

function setFilter(f) {
  filter = f;
  renderTasks();
}

function clearCompleted() {
  tasks = tasks.filter(task => !task.completed);
  renderTasks();
}
