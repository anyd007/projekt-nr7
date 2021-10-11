let todoInput, errorInfo, addBtn, ulList, newList, popupBox; 

const main = ()=>{
    DOMElement();
    DOMEvents();
}

const DOMElement = () =>{
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
}

// dodanie fukcjonalności na inputa
const addElement = () =>{
    if(todoInput.value !== ''){
        newList = document.createElement('li');
        newList.textContent = todoInput.value;
        ulList.append(newList);
        todoInput.value = '';
        errorInfo.textContent = '';
        createTools();
    }else{
        errorInfo.textContent = 'WPROWADŹ NOWE ZADANIE'
    }
}
// stworzenie diva z buttonami
const createTools = () =>{
    const styleDiv = document.createElement('div');
    styleDiv.classList.add('tools');
    newList.append(styleDiv);

    const compliteBtn = document.createElement('button');
    compliteBtn.classList.add('complete');
    compliteBtn.innerHTML ='<i class="fas fa-check"></i>'
    styleDiv.append(compliteBtn);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.textContent = 'EDYTUJ';
    styleDiv.append(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete2');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
    styleDiv.append(deleteBtn);
}

// sprawdzanie buttonów
const checkButtons = e => {
   if(e.target.matches('.complete')){
       e.target.closest('li').classList.toggle('completed');
       e.target.classList.toggle('completed')
   }else if(e.target.matches('.edit')){

   }else if(e.target.matches('.delete')){

   }
//    console.log(e.target.classList.value === 'complete');
}
  






const DOMEvents = () =>{
    addBtn.addEventListener('click', addElement);
    ulList.addEventListener('click', checkButtons);
}
    

document.addEventListener('DOMContentLoaded', main);



