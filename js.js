let todoInput, errorInfo, addBtn, ulList, liList; 

const main = ()=>{
    DOMElement();
    DOMEvents();
}

const DOMEvents = ()=>{
    addBtn.addEventListener('click', addTaskBtn)
    todoInput.addEventListener('keyup', enterEvent)
}

const DOMElement = ()=>{
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
}

const addTaskBtn = ()=>{
    if(todoInput.value !== ''){
        liList= document.createElement('li');
        liList.textContent = todoInput.value;
        createNewTask();
        ulList.append(liList);
        todoInput.value = ''
        errorInfo.textContent = 'podaj kolejne zadanie'
    }else{
        errorInfo.textContent = 'Podaj nowe zadanie'
        
    }
}

const enterEvent = () =>{
    if(event.key === 'Enter' || event.keyCode === 13){
addTaskBtn()
    }
}
const createNewTask = () =>{
    const btnPanel = document.createElement('div');
    btnPanel.classList.add('tools');
    liList.append(btnPanel);

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('complete');
    confirmBtn.innerHTML = '<i class="fas fa-check"></i>'

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.textContent = 'EDYTUJ'

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

    btnPanel.append(confirmBtn, editBtn, deleteBtn)

}





document.addEventListener('DOMContentLoaded', main);