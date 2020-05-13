'use strict';
// 10*. Приложение todo (начатое в классе). Заметки организовать в список. При нажатии
//  на кнопку "Add" введенная заметка добавляется и отображается в перечне (списке)

// 10** реализуйте добавление заметки в список с checkbox и кнопку “Delete”. 
// Если пользователь отмечает задачу и нажимает на кнопку удаления, задача удаляется и 
// исчезает из списка
const mypattern = /(?!^\s*?$)^.+$/;
let isValid = false;

const inputTaskElem = document.querySelector('input[name="task"]');
const createTaskBtnElem = document.querySelector('#createTaskBtn');
const taskList = document.querySelector('#taskList');

inputTaskElem.oninput = onInputHandler;
createTaskBtnElem.addEventListener('click', onCreateTaskBtnClk);
taskList.addEventListener('click', taskListHandler);

function onInputHandler() {
    isValid = mypattern.test(this.value);
    if (isValid) {
        this.classList.remove("invalidstyle");
        this.classList.add("validstyle");
    } else {
        this.classList.add("invalidstyle");
        this.classList.remove("validstyle");
    }
    console.log(isValid);
};

function onCreateTaskBtnClk() {
    if (isValid) {
        const li = document.createElement('li');
        const check = document.createElement('input');
        const task = document.createElement('div');
        const delBtn = document.createElement('button');
        const doneBtn = document.createElement('button');
        check.className = 'check';
        check.setAttribute('name', 'check');
        check.setAttribute('type', 'checkbox');
        task.className = 'task';
        task.textContent = inputTaskElem.value;
        delBtn.textContent = 'Delete';
        delBtn.className = 'delBtn';
        doneBtn.textContent = 'Done';
        doneBtn.className = 'doneBtn';
        li.append(check, task, delBtn, doneBtn);
        taskList.append(li);
        inputTaskElem.value = "";
        isValid = false;
    }
};

function taskListHandler(e) {
    console.log(e.target.className);
    if (e.target.className === 'doneBtn') {
        e.target.parentNode.classList.add('doneStyle');
    };
    if (e.target.className === 'delBtn') {
        e.target.parentNode.remove();
    };
    if (e.target.className === 'delTasksBtn') {
        const delTasks = this.querySelectorAll('input');
        delTasks.forEach(i => {
            if (i.checked) i.parentNode.remove()
        });
    };
}