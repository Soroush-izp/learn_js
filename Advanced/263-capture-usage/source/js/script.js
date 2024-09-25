const listItems = document.querySelectorAll('li')
const inputElem = document.querySelector('input')
const languagesContainer = document.querySelector('.list')

// listItems.forEach(function (listItem) {
//     listItem.addEventListener('click', function (event) {
//         console.log(event.target);
//         event.target.remove()
//     })
// })

languagesContainer.addEventListener('click', function (event) {

    if (event.target.tagName === 'LI') {
        event.target.remove()
    }
    
})

inputElem.addEventListener('keypress', function (event) {
    if (event.keyCode === 13) {
        let newLanguageLi = document.createElement('li')
        newLanguageLi.innerHTML = event.target.value

        languagesContainer.append(newLanguageLi)

        console.log(listItems);

        inputElem.value = ''
    }
})