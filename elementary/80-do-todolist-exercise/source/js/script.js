var todosArray = [
    { id: 1, title: 'learn js', isDoing: false },
    { id: 2, title: 'make footer', isDoing: true },
    { id: 3, title: 'design', isDoing: false },
    { id: 4, title: 'vue js', isDoing: false },
]

var userMenu = prompt('Choose one of them: \n 1. Add Todo \n 2. Remove Todo \n 3. Do Todo')

if (userMenu === '1') {
    // alert('Add')
    var newTodoName = prompt('Enter The New Todo Name: ', '')
    var newTodoObject = {
        id: todosArray.length + 1,
        title: newTodoName,
        isDoing: false
    }
    todosArray.push(newTodoObject)
    console.log("Todos Array: ", todosArray)
    
} else if (userMenu === '2') {
    // alert('Remove')
    var removeTodoName = prompt('Enter The Removable Todo Name: ', '')
    var removableTodoIndex = todosArray.findIndex(function (todo) {
        return todo.title === removeTodoName
    })
    todosArray.splice(removableTodoIndex, 1)
    console.log("Todos Array: ", todosArray)
    
} else if (userMenu === '3') {
    // alert('Doing')
    var editableTodoName = prompt('Enter The Editable Todo Name: ', '')
    todosArray.forEach(function (todo) {
        // Codes
        // console.log(todo)
        if (todo.title === editableTodoName) {
            todo.isDoing = true
        }
    })   
    console.log("Todos Array: ", todosArray) 
} else {
    alert('گزینه وارد شده معتبر نمی باشد')
}