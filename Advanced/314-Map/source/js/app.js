// Map

// let user = {
//     id: 1,
//     firstName: 'Qadir',
//     lastName: 'Yolme',
//     age: 20
// }

// for (let userProp of user) {
//     // Codes ...
// }

// console.log(user);

let userMap = new Map()

userMap.set('id', 1)
userMap.set('firstName', 'Qadir')
userMap.set('lastName', 'Yolme')
userMap.set('age', 20)

let userObj = Object.fromEntries(userMap)

console.log(userObj);

console.log(userMap);

// console.log('UserMap Before Delete', userMap, '&& Size:', userMap.size);

// userMap.delete('age')

// console.log('UserMap After Delete', userMap, '&& Size:', userMap.size);

// console.log(userMap.get('firstName'));

// userMap.clear()

// console.log('UserMap After Clear:', userMap);

// console.log(userMap.has('lastName'));

// userMap.forEach((value, key) => console.log(`${key}: ${value}`))

///////////////////////////////////////////

// let user = {
//     id: 1,
//     firstName: 'Qadir',
//     lastName: 'Yolme',
//     age: 20
// }

// let userMap = new Map(Object.entries(user))


// console.log(user);
// console.log(userMap);