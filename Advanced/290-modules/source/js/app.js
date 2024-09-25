import { isLogin, userRegister, usersCount as usersLength } from './funcs.js'


let newUserName = prompt('Enter User Name: ')
let newUserAge = prompt('Enter User Age: ')

console.log('Users Count:', usersLength);

// console.log(userRegister(newUserName, newUserAge));

console.log(isLogin(41));