// let symbol1 = Symbol('Symble 1')
// let symbol2 = Symbol('User ID Symbol')
// let symbol3 = Symbol('userID')
// let symbol4 = Symbol('userID')

// console.log(symbol1);
// console.log(symbol2);
// console.log(symbol3);
// console.log(symbol4);

// console.log(symbol3 === symbol4) // false 

// console.log(typeof symbol1);

/////////////////////////////////////////////////

let userIDSymbol = Symbol.for('User ID')

let userObject = {
    id: 1,
    userName: 'Amin',
    age: 22,
    [userIDSymbol]: 'IJNDSFV-1E2134JNMK'
}

console.log(userObject[Symbol.for('User ID')]);

console.log(userIDSymbol === Symbol.for('User ID'));

// for (let item in userObject) {
//     console.log(item);
// }