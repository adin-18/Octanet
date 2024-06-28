// script.js
document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            li.appendChild(taskSpan);

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.classList.add('done-checkbox');
            li.appendChild(checkbox);

            // Create a span for the "Complete" text and hide it initially
            const completeTextSpan = document.createElement('span');
            completeTextSpan.textContent = ' Complete';
            completeTextSpan.style.display = 'none';
            li.appendChild(completeTextSpan);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
            taskInput.value = '';

            checkbox.addEventListener('change', () => {
                taskSpan.classList.toggle('task-done');
                // Toggle the visibility of the "Complete" text
                completeTextSpan.style.display = checkbox.checked ? 'inline' : 'none';
            });

            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });
        }
    }
});
