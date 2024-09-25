// Arrow Function

// function sum (num1, num2) {
//     let addNumbers = num1 + num2
//     return addNumbers
// }

// const sum = (num1, num2) => {
//     let addNumbers = num1 + num2
//     return addNumbers
// }

// const pow = (num1, num2) => {
//     return num1 ** num2
// }

const pow = (num1, num2) => num1 ** num2

const logger = val => console.log(val)

const generateUser = (id, name, age = 18) => ({id: id, name: name, age: age})

// console.log(sum(8, 12)) // 20
// console.log(pow(3, 2)); // 9
// logger('Test Text')

console.log(generateUser(1, 'Ali', 22));