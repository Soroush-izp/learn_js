// const usersContainer = document.querySelector('#wrap-users')
// const deleteModal = document.querySelector('#delete-modal')

// let userID = null

// window.addEventListener('load', () => {
//    getAllUsers()
// })

// function getAllUsers () {
    
//     fetch('https://sabzlearn-js-default-rtdb.firebaseio.com/users.json')
//         .then(res => res.json())
//         .then(data => {
//             let usersData = Object.entries(data)
            
//             usersContainer.innerHTML = ''

//             usersData.forEach(user => {

//                 console.log(user);

//                 usersContainer.insertAdjacentHTML('beforeend', `
                
//                     <div class="user">
//                     <div class="user-profile-wrap">
//                         <img class="user-profile" src="content/img/noimg.png" alt="default-image">
//                         <div class="user-profile-description">
//                             <h1 class="user-profile-name">${user[1].firstname} - ${user[1].lastname}<span class="user-age">18</span> </h1>
//                             <h3 class="user-explanations">Pass: ${user[1].password}</h3>
//                         </div>
//                     </div>
//                     <div class="btn-groups-column">
//                         <button class="delete-user-btn" onclick="openDeleteModal('${user[0]}')">delete</button>
//                         <button class="edit-user-btn">edit</button>
//                     </div>
//                 </div>
    
//                 `)

//             })
//         })
// }

// // Delete

// function openDeleteModal (id) {

//     userID = id

//     deleteModal.classList.add('visible')
// }

// function closeDeleteModal () {
//     deleteModal.classList.remove('visible')
// }

// function deleteUser () {
    
//     // User Remove

//     fetch(`https://sabzlearn-js-default-rtdb.firebaseio.com/users/${userID}.json`, {
//         method: 'DELETE'
//     }).then(res => {

//         console.log(res);

//         getAllUsers()
//         closeDeleteModal()
//     })
// }

const $ = document
const userContainer = $.querySelector('#wrap-users')
const deleteModal = $.querySelector('#delete-modal')
let userId = null;

window.addEventListener('load', () => getAllUsers ())
function getAllUsers () {
    userContainer.innerHTML = ''
    fetch('https://api-test-6f2cb-default-rtdb.firebaseio.com/users.json') // fetch Default Method : get/read
    .then(res => res.json())  // json() for back to def format (from json)
    .then( data => {
        let userData = Object.entries(data) // Object.entries(data) for back to array from object for using (forEach) Method
        userData.forEach(user => {
        userContainer.insertAdjacentHTML('beforeend', `
            <div class="user">
                <div class="user-profile-wrap">
                    <img class="user-profile" src="content/img/noimg.png" alt="default-image">
                    <div class="user-profile-description">
                        <h1 class="user-profile-name">${user[1].firstname} - ${user[1].lastname}<span class="user-age">18</span> </h1>
                        <h3 class="user-explanations">Pass: ${user[1].password}</h3>
                    </div>
                </div>
                <div class="btn-groups-column">
                    <button class="delete-user-btn" onclick="openDeleteModal('${user[0]}')" >delete</button>
                    <button class="edit-user-btn">edit</button>
                </div>
            </div>
        `)
        })
    })
}

function openDeleteModal(id) {
    userId = id;
    deleteModal.classList.add('visible');
}

function closeDeleteModal() {
    deleteModal.classList.remove('visible');
}

async function deleteUser() {
    await fetch(`https://api-test-6f2cb-default-rtdb.firebaseio.com/users/${userId}.json`, {
        method: 'DELETE'
    }).then(res => {
        // console.log(res);
        getAllUsers ()
        closeDeleteModal()
    })
}
