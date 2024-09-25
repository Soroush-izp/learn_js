const classNameInput = document.querySelector('#class-name')
const shadowInput = document.querySelector('#shadow')
const shadowGeneratorBtn = document.querySelector('button')


function shadowGenerator (event) {
    event.preventDefault()

    let classNameInputValue = classNameInput.value
    let shadowInputValue = shadowInput.value

    let decimalNumberRegex = /^[-+]?(\d*\.)?\d+$/

    if (decimalNumberRegex.test(shadowInputValue)) {
        alert(`.${classNameInputValue} {
            box-shadow: ${shadowInputValue}px
}`)
    } else {
        alert('سایز سایه شما معتبر نمی باشد')
    }

}


shadowGeneratorBtn.addEventListener('click', shadowGenerator)