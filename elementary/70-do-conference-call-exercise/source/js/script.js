var groupUsers = [
	{id: 1, name: 'Ali', age: 19},
	{id: 2, name: 'Amin', age: 22},
	{id: 3, name: 'Amir', age: 21},
	{id: 4, name: 'Akbar', age: 29},
	{id: 5, name: 'Hasan', age: 19},
	{id: 6, name: 'Mohammad', age: 27},
	{id: 7, name: 'Asgar', age: 25},
	{id: 8, name: 'Reza', age: 27},
	{id: 9, name: 'Merhdad', age: 24},
	{id: 10, name: 'Qadir', age: 19},
]


var isAll = groupUsers.every(function (user) {
	return user.age > 18
})

if (isAll === true) {
	console.log('شما می توانید تماس کنفرانسی خود را استارت بزنید')
} else {
	console.log("شما مجاز به ایجاد تماس کنفرانسی نیستید")
}