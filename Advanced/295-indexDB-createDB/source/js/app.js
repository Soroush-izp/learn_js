let $ = document
let registerForm = $.querySelector('.register-form')
const nameInput = $.querySelector('.name-input')
const passwordInput = $.querySelector('.password-input')
const emailInput = $.querySelector('.email-input')
const userTableELem = $.querySelector('table')

let db = null
let objectStore = null
window.addEventListener('load', () => {
    
    let DBOpenReq = indexedDB.open('sabzLearn', 13)

    DBOpenReq.addEventListener('error', (err) => {
        console.warn('Error', err);
    })

    DBOpenReq.addEventListener('success', (event) => {
        db = event.target.result
        getUsers()
        console.log('Success', event.target.result);
    })
    
    DBOpenReq.addEventListener('upgradeneeded', (event) => {
        let tx = createTX('users', 'readwrite')
        db = event.target.result
        console.log('new version: ', event.newVersion);
        console.log('old version: ', event.oldVersion);
        if (!db.objectStoreNames.contains('users')) {
            objectStore = db.createObjectStore('users', {
                keyPath: 'userId'
            })
        }
        db.createObjectStore('courses')
        if (db.objectStoreNames.contains('courses')) {
            db.deleteObjectStore('courses')
        }
        console.log('upgrade: ', db.objectStoreNames);
    })
    
})

registerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let newUser = { 
        userId: Math.floor(Math.random() * 9999), 
        name: nameInput.value,
        password: passwordInput.value,
        email: emailInput.value
    }
    
    let tx = createTX('users', 'readwrite')

    tx.addEventListener('complete', (event) => {
        console.log('tx success', event);
        
    })
    let store = tx.objectStore('users')
    let request = store.add(newUser)
    clearInput()
    request.addEventListener('error', (err) => {
        console.warn('Request Error', err);
    })

    request.addEventListener('success', (event) => {
        console.log('Request success', event);
        clearInput()
        getUsers()
    })
})

function clearInput() {
    nameInput.value = ''
    passwordInput.value = ''
    emailInput.value = ''
}

function getUsers() {
    let tx = db.transaction('users', 'readonly')

    tx.addEventListener('error', (err) => {
        console.warn('tx Error', err);
    })

    tx.addEventListener('complete', (event) => {
        console.log('tx Complete', event);
    })
    let store = tx.objectStore('users')
    let request = store.getAll()

    request.addEventListener('error', (err) => {
        console.warn('Get Request Error', err);
    })

    request.addEventListener('success', (event) => {
        let allUsers = event.target.result
        console.log('Get Request', allUsers);
        userTableELem.innerHTML += allUsers.map( user => {
            return `
            <tr>
                <td>${user.userId}</td>
                <td>${user.name}</td>
                <td>${user.password}</td>
                <td>${user.email}</td>
            </tr>`
        }).join('')
    })
    clearInput()
}
function createTX(storeName, mode) {
    let tx = db.transaction(storeName, mode)

    tx.addEventListener('error', (err) => {
        console.warn('tx Error', err);
    })
    return tx
}