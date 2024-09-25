// CRUD - Proxy

let user = {
    id: 1,
    firstName: 'Mohammad Amin',
    lastName: 'Saeedi Rad',
    age: 22
}


// user.job = 'Web Developer'

// console.log(user.firstName) // Read

// console.log(user);

let userProxy = new Proxy(user, {

})

console.log('User:', user.firstName);
console.log('Proxy User:', userProxy.firstName);

console.log(user.email); // undefined