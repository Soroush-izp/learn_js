var tasksArray = {
    ali: ['html', 'css', 'js'],
    amin: ['react', 'vue', 'angular'],
    mohammad: ['seo', 'link building'],
    amir: ['admin', 'content']
}


var newTaskname = prompt('Enter The New Task: ') 
var employName = prompt('Enter The Employ Name: ') // nohammad

var employTasks = tasksArray[employName]
employTasks.push(newTaskname)

console.log(tasksArray)