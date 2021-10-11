let todoInput, errorInfo, addBtn, ulList, newList; 
// zmienne do popupa
let popupBox, popupInfo, todoToEdit, popupInput, popupAddBtn, popupCloceBtn

const main = ()=>{
    DOMElement();
    DOMEvents();
}

const DOMElement = () =>{
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    errorInfo.textContent = 'wprowadź zadanie'
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
    popupBox = document.querySelector('.popup');
    popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
    popupCloceBtn = document.querySelector('.cancel')
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
    e.target.classList.toggle('completed');
  }else if(e.target.matches('.edit')){
        editBox(e);
     }else if(e.target.matches('.delete2')){
        deleteTask(e);
  }
//    console.log(e.target.classList.value === 'complete');
}
// usuwanie z listy wykonanych zadań
const deleteTask = e =>{
    e.target.closest('li').remove()
    const allLi = ulList.querySelectorAll('li');
    if(allLi.length === 0){
        errorInfo.textContent = 'lista jest pusta'
    }
}


// edycja POPUP, pobranie danych 'e'
const editBox = e =>{
    todoToEdit = e.target.closest('li');
    popupInput.value = todoToEdit.firstChild.textContent;
    popupBox.style.display = 'flex'
}
// zamykanie POPUP
const closePopUp = ()=>{
    popupBox.style.display = 'none';
    popupInfo.textContent = '';
}
// zatwierdzanie zmian w POPUP i przypisanie ich do listy
const acceptPopup = ()=>{
if(popupInput.value !== ''){
todoToEdit.firstChild.textContent = popupInput.value;
popupInfo.textContent = '';
popupBox.style.display = 'none';
    }else{
    popupInfo.textContent = 'WPROWADŹ ZADANIE'
}
}   
// wprowadzenie zadania przez enter
const enterEvent = e =>{
    if(e.key === 'Enter'){
        addElement();
    }
}

const popupEnter = e =>{
    if(e.key === 'Enter'){
        acceptPopup();
    }
}

  
const DOMEvents = () =>{
    popupInput.addEventListener('keydown', popupEnter);
    todoInput.addEventListener('keydown', enterEvent);
    popupAddBtn.addEventListener('click', acceptPopup);
    popupCloceBtn.addEventListener('click', closePopUp);
    addBtn.addEventListener('click', addElement);
    ulList.addEventListener('click', checkButtons);
}

document.addEventListener('DOMContentLoaded', main);



