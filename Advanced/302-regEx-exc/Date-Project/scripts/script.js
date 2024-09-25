let $ = document
let button = $.querySelector('button')
let date = $.querySelector('#date')

button.addEventListener('click', event => {
   event.preventDefault()
   let dateChecker = /^\d{4}(-|\/|\\)(0?[1-9]|1[012])(-|\/|\\)([012]?[1-9]|3[01])$/
   console.log(dateChecker.test(date.value));
   date.value = ''
})