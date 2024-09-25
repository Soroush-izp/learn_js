let h1Elem = document.getElementById('title')

let liItems = document.querySelectorAll('.list-item')

let input = document.getElementById('input')

let selectBox = document.getElementById('select')

// console.log(liItems[2].innerHTML)
// console.log(liItems[2].innerText)
// console.log(liItems[0].textContent)
liItems[0].innerHTML = 'درباره ما'

selectBox.value = 'tehran'

input.value = 'vue js'

console.log(selectBox.value)