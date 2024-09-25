// let id = 1
// let userName = 'Amin01'
// let age = 22
// let job = 'Web Developer'

// let user = {
//     id,
//     userName,
//     age,
//     job
// }

// console.log(user);

const userMaker = (firstName, lastName, age) => {
    let newUser = {
        firstName,
        lastName,
        age
    }

    return newUser
}

let userAli = userMaker('Ali', 'Mohammadi', 19)

console.log(userAli);