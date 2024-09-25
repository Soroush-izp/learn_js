class newTodo {

   constructor (todoTitle) {
      this.todoTitle = todoTitle;
      this.isCompleted = false;
   }
}

class todoList {

   constructor (todosContainer) {
      this.todos = JSON.parse(localStorage.getItem('todos')) || [];
      this.todosContainer = todosContainer;
      this.addBtn = document.querySelector('#addButton');
      this.clearBtn = document.querySelector('#clearButton');
      this.input = document.querySelector('#itemInput')
      this.render(this.todos)
   }

   render (todos) {
      this.todosContainer.innerHTML = ''
      this.addBtn.addEventListener('click', () => {
         this.addNewTodo(this.input.value)
         this.input.value = ''
      })
      this.clearBtn.addEventListener('click', () => {
         this.clearAllTodos()
      })
      this.addToDosToDom ()
   }

   addToDosToDom () {
      this.todosContainer.innerHTML = ''
      let isComp
      this.todos.forEach( (todo) => {
         if (todo.isCompleted) {
            isComp = 'todo-completed'
         } else {
            isComp = ''
         }
         this.todosContainer.insertAdjacentHTML('beforeend', `
         <li class="completed well">
            <label class="${ isComp}">${ todo.todoTitle}</label>
            <button class="btn btn-success">Complete</button>
            <button class="btn btn-danger remove-btn">Remove</button>
         </li>
         `)
      });
      let completeBtn = document.querySelectorAll('.btn-success')
      let removeBtn = document.querySelectorAll('.remove-btn')
      this.toggleCompleteBtn(completeBtn)
      this.removeTodos(removeBtn)
      
   }

   toggleCompleteBtn (completeBtn) {
      completeBtn.forEach( (compBtn, index) => {
         compBtn.addEventListener('click', (event) => {
            event.target.previousElementSibling.classList.toggle('todo-completed')
            this.todos[index].isCompleted = !this.todos[index].isCompleted
            // console.log(this.todos[index].isCompleted);
            // console.log(this.todos);
            this.saveTodoIntoLocalStorage ()
         })
      })
   }

   removeTodos (removableToDos) {
      console.log(removableToDos);
      removableToDos.forEach( (todos, index) => {
         todos.addEventListener('click', (event) => {
            event.target.parentNode.remove()
            this.todos.splice(index-1, 1);
            // console.log(this.todos);
            this.saveTodoIntoLocalStorage ()
         })
      })
   }

   addNewTodo(newTodoTitle) {

      if (newTodoTitle.trim) {
         this.todos.push(new newTodo(newTodoTitle))
         this.saveTodoIntoLocalStorage()
         this.addToDosToDom ()
      }
   }
   saveTodoIntoLocalStorage () {
      localStorage.setItem('todos', JSON.stringify(this.todos))
   }

   clearAllTodos () {
      this.todos = []
      this.saveTodoIntoLocalStorage ()
      this.addToDosToDom ()
   }

}

new todoList(document.querySelector('#todoList'))