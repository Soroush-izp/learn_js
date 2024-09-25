// CRUD - Proxy (Get Trap) || (in)

let user = {
    id: 1,
    firstName: 'Amin',
    lastName: 'Saaedi Rad',
    age: 22
}

user = new Proxy (user, {
    get: function (target, property) {

        console.log("Target:", target);
        console.log("Property:", property);

        // return target[property] ? target[property] : 'Amin'
        return property in target ? target[property] : null
    }
})

// console.log('User Object:', user.phone);
console.log('User Proxy:', user.id);