const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all Event Listeners
loadEventListeners();


// Load All Event Listeners
function loadEventListeners(){

    // Add Task Event
    form.addEventListener('submit', addTask);

    // Delete Task Event
    taskList.addEventListener('click', removeTask);

    // Clear All Tasks
    clearBtn.addEventListener('click', clearTasks);
}
// Add Task
function addTask(e){

    if(taskInput.value === ''){
        alert('Add a Task');
    } else {
    // Create li Element
    const li = document.createElement('li');
    
     // Add class to li element
     li.className = 'collection-item';
 
     // Create text node and append to li
     li.appendChild(document.createTextNode(taskInput.value));
 
     // Create new link element
     const link = document.createElement('a');
 
     // Add class to link element
     link.className = 'delete-item secondary-content';
 
     // add icon html
     link.innerHTML = '<i class="fa fa-remove"></i>';
 
     // Append the link to li
     li.appendChild(link);
 
     // Append li to ul
     taskList.appendChild(li);
        
     taskInput.value = '';
 
     e.preventDefault();
    } 
}
// Delete Task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
        };
    }
}
// Cler Tasks Funciton
function clearTasks(){
    taskList.innerHTML = '';
}