// Spread Syntax Es6

// let nums = [2, 4, 1]

// function sum (a, b, c) {
//     console.log('a: ', a);
//     console.log('b: ', b);
//     console.log('c: ', c);
//     return a + b + c
// }

// console.log(sum(2, 4, 1 ));
// console.log(sum(...nums))


/////////////////////////////////////////////////////////////////////

// Spread Syntax Es6

let user = {
    id: 1,
    name: 'Ali',
    age: 22
}

let newUser = { ...user }
// let newUser = user


newUser.age = 24

console.log('User', user);
console.log('New User', newUser);