let user = {
    id: 1,
    username: 'Amin',
    age: 22,

    address: {
        country: 'Iran',
    }
}

// let userStreet = user.address.city ? user.address.city.street : undefined

let userStreet = user.address.city?.street

console.log(userStreet);