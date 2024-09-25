
let ulElem = document.querySelector('ul')

let newLiItem = document.createElement('li')
newLiItem.innerHTML = 'Products'

let otherLiItem = document.createElement('li')
otherLiItem.innerHTML = 'Users'

// ulElem.append(newLiItem)
// ulElem.append(otherLiItem)

ulElem.appendChild(newLiItem)
ulElem.appendChild(otherLiItem)

console.log(newLiItem)
console.log(ulElem)