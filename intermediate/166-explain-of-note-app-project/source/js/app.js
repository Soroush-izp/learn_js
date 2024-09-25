let $ = document
let inputField = document.querySelector('#input-field')
let listed = document.querySelector('#listed')
let btnSave = document.querySelector('#btn-save')
let btnDelete = document.querySelector('#btn-delete')
let colorBox = document.querySelectorAll('.color-box')
let div
let p

// bgcElement ()
function addNote () {   // add a note
   div = $.createElement('div')
   div.classList = ('card shadow-sm rounded')
   div.style.backgroundColor = inputField.style.backgroundColor
   p = $.createElement('p')
   p.classList = ('card-text p-3')
   p.innerHTML = inputField.value
   div.append(p)
   return div
}
function addCheck () {  // check what added
   if (inputField.value != '') {
         listed.append(addNote ())
      } else {
         inputField.style.borderBottom = '1px solid red'
      }
}
function cleanInput () {   // clean input
   inputField.value = ''
   inputField.style.backgroundColor= 'unset'

}
// function removeCard () {
//    let card = document.querySelectorAll('.card')
//    card.forEach( (item) => {  // remove Notes After Click On Card
//       item.addEventListener('click', () => {
//          item.remove()
//       })
//    })
// }

inputField.addEventListener('keydown', (event) => {   // add Note After Enter
   inputField.style.borderBottom = 'none'
   if (event.keyCode === 13) {
      addCheck ()
      cleanInput ()
      // removeCard ()
   }
})

btnSave.addEventListener('click', () => {    // add Note After Click Submit
   addCheck ()
   cleanInput ()
   // removeCard ()
})

btnDelete.addEventListener('click', () => {  // add Note After Click Clear
   cleanInput ()
})

colorBox.forEach( (color) => {
   color.addEventListener('click', () => {
      inputField.style.backgroundColor = color.style.backgroundColor
   })
})
listed.addEventListener('click', (event) => {
   if (event.target.getAttribute('class') == 'card shadow-sm rounded') {
      event.target.remove()
   } else if (event.target.getAttribute('class') == 'card-text p-3') {
      event.target.parentNode.remove()
   }
})