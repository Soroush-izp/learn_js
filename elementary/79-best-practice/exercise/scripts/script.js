var toDos = [
   {id: 1, name: 'read a book', state: false}, 
   {id: 2, name: 'programming', state: true}, 
   {id: 3, name: 'work', state: false}, 
], 
task = +prompt(`1. Add ToDo\n2. Delete ToDo\n3. Change State`), 
toDoName = prompt(`Enter ToDo Name :`), 
Index, 
isDeleted = false, 
isState = false

switch (task) {
   case 1:
      toDos.push({id: toDos.length + 1, name: toDoName, state: false});
      console.log(`New ToDo added !`);
      console.log(toDos);
      break;
   case 2:
      Index = toDos.findIndex(item => {
         if (toDoName === item['name']) {
            isDeleted = true;
            console.log(`we find your ToDo!`);
         }
         return toDoName === item['name'];
      })
      if (isDeleted) {
         toDos.splice(Index, 1);
         console.log(`${toDoName} deleted`);
         console.log(toDos);
      } else {
         console.log(`This todo didn't exist!`);
      }
      break;
   case 3:
      toDos.findIndex(item => {
         if (toDoName === item['name']) {
            isState = true;
            item['state'] = true;
            console.log(`we find your ToDo!`);
         }
         return toDoName === item['state'];
      })
      if (!isState) {
         console.log(`This todo didn't exist!`);
      } else {
         console.log(`This todo is Done`);
      }
      console.log(toDos);
      break;
   default:
      console.log(`Your number is not available`);
      break;
}

