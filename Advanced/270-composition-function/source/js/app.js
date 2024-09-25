const todoInputElem = document.querySelector('.todo-input')
const todolist = document.querySelector('.todolist')

function trim (val) {
    return val.trim()
}

function toLowerCase (val) {
    return val.toLowerCase()
}

function insertToLi (todoVal) {
    return '<li>' + todoVal + '</li>'
}

function addTodo (event) {
    if (event.charCode === 13) {
        todolist.insertAdjacentHTML('beforeend', insertToLi(toLowerCase(trim(todoInputElem.value))))
        todoInputElem.value = ''
    }
}

todoInputElem.addEventListener('keypress', addTodo)