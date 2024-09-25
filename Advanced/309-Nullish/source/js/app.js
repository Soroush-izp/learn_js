// let port = NaN

// let developingPort = port || 3003 // falsy value => Truthy value

// console.log(developingPort);

///////////////////////  Nullish Operator (null, undefined)  ///////////////////////////////

let port = undefined
let testPort = 0

let developingPort = (testPort || port) ?? 3000

console.log(developingPort);