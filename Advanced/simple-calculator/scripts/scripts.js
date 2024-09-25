const $ = document
let display = $.querySelector('#display')

function appendToDisplay (input) {
   display.value += input
}

function clearDisplay () {
   display.value = ''
}

function calculate () {
   display.value = eval(display.value)
}

function clear () {
   display.value = display.value
}