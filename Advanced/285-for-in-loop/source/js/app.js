// for in

let user = {
    id: 1, 
    name: 'Ali',
    age: 19
}

for (let item in user) {
    console.log(`user.${item}: ${user[item]}`);
}