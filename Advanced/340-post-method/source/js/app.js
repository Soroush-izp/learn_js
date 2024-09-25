// const $ = document

// const firstname = $.querySelector('.firstname')
// const lastname = $.querySelector('.lastname')
// const password = $.querySelector('.password')
// const button = $.querySelector('button')

// button.addEventListener('click', (e) => {

//     e.preventDefault()

//     let userData = {
//         firstname: firstname.value,
//         lastname: lastname.value,
//         password: password.value,
//     }

//     fetch('http://localhost:3000/api/users', {
//         method: 'POST',
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(userData)
//     })
//     .then(res => console.log(res))

// })

// firstname - lastname - password
// Get - Post
// localhost:3000/api/users

const $ = document

const firstname = $.querySelector('.firstname')
const lastname = $.querySelector('.lastname')
const password = $.querySelector('.password')
const button = $.querySelector('button')

button.addEventListener('click', e => {
    e.preventDefault()

    let userData = {
        firstname: firstname.value, 
        lastname: lastname.value, 
        password: password.value
    }

    fetch('localhost:3000/api/users', {
        method: "POST", 
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res => console.log(res));
})

// firstname - lastname - password
// get => for reading data, post => for send/save data in server(from client)
// localhost:3000/api/users