var ages = [19, 13, 28, 32, 22]

var isAll = ages.every(function (age) {

	console.log(age)
	return age > 18
})

console.log(isAll)