const taskInput = document.getElementById('taskName');
const prioritySelect = document.getElementById('priority');
const createBtn = document.querySelector('button');
const tableBody = document.querySelector('tbody');

createBtn.addEventListener('click',()=>{
    const taskName = taskInput.value.trim();
    const priority = prioritySelect.value;

    if(taskName === "" || priority===''){
        alert('please enter task name and select priority')
        return;
    }

    const newRow=document.createElement('tr');

    newRow.innerHTML = `
            <td>${taskName}</td>
            <td>${priority}</td>
            <select>
              <option value="Pending">Pending</option>
              <option value="In-Progress">In-Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <td><button onclick="deleteRow(this)">Remove</button></td>
    
    `;
    tableBody.appendChild(newRow);
    //clear input fields
    taskInput.value="";
    prioritySelect.value="";

    function deleteRow(button){
        button.parentElement.parentElement.remove();
    }
});