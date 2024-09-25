var usersData = [
	{id: 1, name: 'Ali', age: 19},
	{id: 2, name: 'Amin', age: 21},
	{id: 3, name: 'Amir', age: 18},
]

// console.log(usersData.includes({id: 1, name: 'Ali', age: 19}))

var isInUsers = usersData.some(function (user) {
	// Codes
	console.log(user)
	return user.name == 'Mohammad'
})

console.log(isInUsers)