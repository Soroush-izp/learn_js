var users = [
    {id: 1, name: 'Ali', age: 21},
    {id: 2, name: 'Amin', age: 19},
    {id: 3, name: 'Amir', age: 26},
    {id: 4, name: 'Babak', age: 28},
]

var mainUserData = users.find(function (user) {
    return user.name === 'Amin'
})

console.log(mainUserData)