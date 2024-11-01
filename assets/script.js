let inputBox = document.querySelector('#input-box');
let listContainer = document.querySelector('#list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('Adicione uma tarefa! ( Add a task! )');
    }else {
        let list = document.createElement('li');
        list.innerHTML = inputBox.value;
        listContainer.appendChild(list);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7'
        list.appendChild(span)
    }
    inputBox.value = '';
    dataSave()
}

listContainer.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        dataSave();
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        dataSave();
    }
},false);

function dataSave(){
    localStorage.setItem('data', listContainer.innerHTML);
};

function taskShow(){
    listContainer.innerHTML = localStorage.getItem('data');
};

taskShow()