var Storage = [
   {id: 1, name: 'ali', task: ''}, 
   {id: 2, name: 'surena', task: ''}, 
   {id: 3, name: 'samira', task: ''},  
   {id: 4, name: 'soheil', task: ''},  
], 
nameEmploy, 
task , 
repeat = false,
state = false;


do {
   nameEmploy = prompt(`Enter name of employee :`)
   task = prompt(`Enter Task:`)
   state = false;
   var index = Storage.findIndex(item => {
      if (item.name === nameEmploy) {
         state = true;
      } 
         return item.name === nameEmploy;
   })
   if (state) {
      Storage[index]['task'] = task;
   } else {
      console.log("Employee not found");
   }
   repeat = confirm(`Are you sure you want to continue!`);
} while (repeat);
console.log(Storage);
