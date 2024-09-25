let $ = document, 
deleteElm = $.querySelectorAll('.delete'), 
formControl = $.querySelector('.form-control'), 
listGroup = $.querySelector('.list-group'), 
add = $.querySelector('.add'), 
newLi, 
elemSpan, 
i


add.addEventListener('submit', (event) => {
   event.preventDefault();
})

// add Todos
formControl.addEventListener('keydown', (event) => {
   if (event.keyCode === 13) {
      if (formControl.value == '') {
         alert('Your input is invalid')
      } else {
         // event.preventDefault()
         elemSpan = $.createElement('span')
         i = $.createElement('i')
         newLi = $.createElement('li')
         
         elemSpan.innerHTML = formControl.value
         i.className = 'fa fa-trash-o delete'
         newLi.className = 'list-group-item d-flex justify-content-between align-items-center'
         newLi.append(elemSpan, i)
         listGroup.append(newLi)
         formControl.value = ''
         i.addEventListener('click', (event) => {
            event.target.parentElement.remove()
         })
      }
   }
})