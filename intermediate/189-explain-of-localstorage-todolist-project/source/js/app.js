const $ = document
let itemInput = $.querySelector('#itemInput')
let addButton = $.querySelector('#addButton')
let todoList = $.querySelector('#todoList')
let clearButton = $.querySelector('#clearButton')
let todoCounter = 0

let toDosArray = []
let toDosLength = 0


if (localStorage.getItem ('toDos')) {
   toDosArray = JSON.parse(localStorage.getItem ('toDos'))
   toDosArray.forEach( (todo) => {
      toDosLength++
      todoList.append(addToDos (todo.content, todo.status))
   })
   // deleteToDos ()
   completeStatus ()
}
function getInputValue () {
   if (itemInput.value != '') {
      return itemInput.value
   } else {
      alert("saySomething !")
   }
}
function addToDos (todo, status = false) {
   todoCounter ++
   let li = $.createElement("li")
   li.id = 'todo-' + todoCounter
   li.classList = 'completed well'
   let label = $.createElement("label")
   label.innerHTML = todo
   let buttonComp = $.createElement("button")
   buttonComp.classList = 'btn btn-success completToDo'
   if (!status) {
      li.classList.add('completed')
      buttonComp.innerHTML = 'Complete'
   } else {
      li.classList.add('uncompleted')
      buttonComp.innerHTML = 'Incompleted'
   }
   let buttonDel = $.createElement("button")
   buttonDel.classList = 'btn btn-danger delToDo'
   buttonDel.innerHTML = 'Delete'
   li.append(label, buttonComp, buttonDel)
   return li
}
function submitToDos () {
   let inputValue = getInputValue ()
   itemInput.value = ''
   if (inputValue != undefined) {
      addNewToDo (inputValue)
      todoList.append(addToDos (inputValue))
      // deleteToDos ()
      completeStatus ()
   }
}
function addNewToDo (inputValue) {
   let newToDoObject = {
      id: toDosArray.length + 1, 
      content: inputValue, 
      status: false, 
   }
   toDosArray.push(newToDoObject)
   setLocalStorage ()
   completeStatus ()
}
function setLocalStorage () {
   localStorage.setItem ('toDos', JSON.stringify(toDosArray))
}
// function deleteToDos () {
//    let delToDo = $.querySelectorAll('.delToDo')
//    delToDo.forEach( (item, num) => {
//       item.addEventListener('click', (event) => {
//          event.target.parentNode.remove()
//          toDosArray.splice(num, 1)
//          localStorage.setItem('toDos', JSON.stringify(toDosArray))
//       })
//    });
// }
function completeStatus () {
   let completToDo = $.querySelectorAll('.completToDo')
   completToDo.forEach( (item, num) => {
      item.addEventListener('click', (event) => {
         event.target.parentNode.classList.toggle('completed')
         event.target.parentNode.classList.toggle('uncompleted')
         if (!event.target.parentNode.classList.contains('uncompleted')) {
            event.target.innerHTML = 'Completed'
         } else {
            event.target.innerHTML = 'Incompleted'
         }
         toDosArray[num].status = !toDosArray[num].status
         localStorage.setItem ('toDos', JSON.stringify(toDosArray))
      })
   })
}
function clearToDos () {
   todoList.innerHTML = ''
   toDosArray = []
   localStorage.removeItem ('toDos')
}

// window.addEventListener('load', getLocalStorage)
addButton.addEventListener('click', submitToDos)
clearButton.addEventListener('click', clearToDos)
$.addEventListener('keydown', (event) => {
   if (event.key == 'Enter') {
      submitToDos ()
   }
})
todoList.addEventListener('click', (event) => {
   if (event.target.getAttribute('class') == 'btn btn-danger delToDo') {
      toDosArray.splice((event.target.parentNode.id.slice(-1) - 1), 1)
      localStorage.setItem('toDos', JSON.stringify(toDosArray))
      event.target.parentNode.remove()
   }
})