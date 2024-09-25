var userName = prompt('Enter User Name: ')

var users = [
	'Ali',
	'Amir',
	'Amir',
	'Babak'
]
// if variable value == boolean we should use (is) in start of the variable 
var isLogin = users.includes(userName)

if (isLogin === true) {
	console.log("به پنل خود خوش آمدید")
} else {
	console.log("ابتدا باید ثبت نام انجام دهید")
}

// var scores = [12, 20, 11, 18, 15, 13]

// var includeResult = scores.includes(12, 0)

// console.log(includeResult)