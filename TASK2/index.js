const taskInput = document.getElementById('taskInput');

taskInput.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        const task = taskInput.value.trim();
        if (task !== '') {
            addTask(task);
            taskInput.value = ''; 
        }
    }
});

function addTask(task) {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-checkbox');
    taskContainer.appendChild(checkbox);

    const taskText = document.createElement('span');
    taskText.textContent = task;
    taskText.classList.add('task-text');
    taskContainer.appendChild(taskText);

    
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskText.classList.add('completed');
        } else {
            taskText.classList.remove('completed');
        }
    });



    const deleteButton = document.createElement('button');
    deleteButton.innerHTML= '<svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>'
    deleteButton.classList.add('button')
    deleteButton.classList.add('task-delete');
    deleteButton.addEventListener('click', function() {
        taskContainer.remove();
    });
    taskContainer.appendChild(deleteButton);

    document.querySelector('.ultimate').appendChild(taskContainer);


}
document.querySelector('.count').addEventListener('click',function(){
    
    const b=document.querySelectorAll('.task-checkbox');
let x=0;
let y=0;
b.forEach(function(checkbox){
    x++;
    if(checkbox.checked){
        y++;
    }
    
});
if(x==0&&y==0) {
    document.querySelector('.final h1').innerHTML="Add tasks to your To Do list";
}
else if(x===y){
    document.querySelector('.final h1').innerHTML="Congratulations! You Have completed every task";
}
else {
    document.querySelector('.final h1').innerHTML=`You have completed ${y} out of ${x} tasks`;
}
});
