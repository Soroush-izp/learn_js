let $ = document
let addBtn = $.querySelector('#add_btn')
let modal = $.querySelector('.modal')
let overlay = $.querySelector('#overlay')
let closeModal = $.querySelector('.close-modal')
let todoSubmit = $.querySelector('#todo_submit')
let todoInput = $.querySelector('#todo_input')
let noStatus = $.querySelector('#no_status')
let statusClass = $.querySelectorAll('.status')
let todoCounter = 0

function showModal () {
   modal.classList.add('active')
   overlay.classList.add('active')
}
function hideModal () {
   modal.classList.remove('active')
   todoInput.value = ''
   overlay.classList.remove('active')
}
function getModalInput () {
   if (todoInput.value != '') {
      return todoInput.value
   } else {
      alert("Say something!")
   }
}
function createElem (todo) {
   todoCounter++
   let div = document.createElement('div')
   div.classList.add('todo')
   div.id = 'todo-' + todoCounter
   div.setAttribute('draggable', 'true')
   div.innerHTML = todo
   let span = document.createElement('span')
   span.classList.add('close')
   span.innerHTML = '&times;'
   div.append(span)
   return div
}
function removeTodo () {
   let close = document.querySelectorAll('.close')
   close.forEach( (item) => {
      item.addEventListener('click', () => {
         item.parentNode.remove()
      })
   } )
}
function dragHandler(event) {
   event.preventDefault()
}
function dragstartHandler(event) {
   event.dataTransfer.setData('elemId', event.target.id)
}
function dropHandler (event) {
   let elemId = event.dataTransfer.getData('elemId')
   let elem = $.getElementById(elemId)
   event.target.append(elem)
}
function todoSub () {
   let modalInput = getModalInput ()
   if (modalInput != undefined) {
      noStatus.append(createElem (modalInput))
      hideModal ()
      removeTodo ()
   }
}


addBtn.addEventListener('click', () => {
   showModal ()
})
closeModal.addEventListener('click', () => {
   hideModal ()
})
todoSubmit.addEventListener('click', todoSub)
$.addEventListener('keydown', (event) => {
   if (event.code === 'Enter') {
      todoSub ()
   } else if (event.code === 'Escape') {
      hideModal ()
   }
})



