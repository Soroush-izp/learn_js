
let userName = prompt('Enter The Name: ')

let newDivElem = document.createElement('div')

newDivElem.innerHTML = userName

newDivElem.setAttribute('id', 'username')

newDivElem.setAttribute('class', 'title')

newDivElem.style.color = 'green'

console.log(newDivElem)