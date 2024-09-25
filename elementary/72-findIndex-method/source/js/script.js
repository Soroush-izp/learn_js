// var users = ['Ali', 'Amin', 'Amir', 'Babak', 'Hasan']

// var userIndex = users.findIndex(function (user) {
// 	console.log(user)
// 	return user == 'Babak'
// })

// console.log(userIndex)

var users = [
	{id: 1, name: 'Ali', age: 19},
	{id: 2, name: 'Amin', age: 21},
	{id: 3, name: 'Amir', age: 25},
	{id: 4, name: 'Babak', age: 20},
]

var userIndex = users.findIndex(function (user) {
	return user.name === 'Amin'
})

console.log("Index: ", userIndex)