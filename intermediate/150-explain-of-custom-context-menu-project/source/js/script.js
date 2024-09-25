let $ = document
let contextMenu = $.querySelector('#contextMenu')

$.body.addEventListener('contextmenu', (event) => {
   event.preventDefault()
   
   if (contextMenu.style.display == 'none') {
      contextMenu.style.left = event.pageX + 'px'
      contextMenu.style.top = event.pageY + 'px'
      contextMenu.style.display = 'block'
   } else {
      contextMenu.style.left = event.pageX + 'px'
      contextMenu.style.top = event.pageY + 'px'
   }
})

$.body.addEventListener('click', () => {
   contextMenu.style.display = 'none'
})

$.body.addEventListener('keydown', (event) => {
   if (event.code === "Escape") {
      contextMenu.style.display = 'none'
   }
})

