function solve() {
    
    let addBtn = document.getElementById('add');
    let taskText = document.getElementById('task');
    let descriptionText = document.getElementById('description');
    let dateText = document.getElementById('date');
    let openTask = document.getElementsByTagName('section')[1];
    let openDiv = openTask.getElementsByTagName('div')[1];

    addBtn.onclick = function addTask() {
        let isValid = false;
        if (taskText.value.length > 0 && descriptionText.value.length > 0  && dateText.value.length > 0 ) {
            isValid = true;
        };
        if (isValid) {
            let newTask = document.createElement('article');
            let header = document.createElement('h3');
            header.innerHTML = taskText.value;
            let description = document.createElement('p');
            description.innerHTML = descriptionText.value;
            let date = document.createElement('p');
            date.innerHTML = dateText.value;
            let divBtns = document.createElement('div');
            divBtns.className = 'flex';
            let startBtn = document.createElement('button');
            startBtn.className = 'green';
            let deleteBtn = document.createElement('button');
            deleteBtn.className = 'red';
            divBtns.appendChild(startBtn);
            divBtns.appendChild(deleteBtn);
            newTask.appendChild(header);
            newTask.appendChild(description);
            newTask.appendChild(date);
            newTask.appendChild(divBtns);
            openDiv.appendChild(newTask);
        }
        
    }

    return addTask();

}