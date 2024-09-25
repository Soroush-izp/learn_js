var userNumbers = []  // [12, 89, 13, 65, 21, 90]

var userNumber = 0
var sum = 0

while (userNumber != -1) {
	userNumber = Number(prompt('Enter the number: \n enter -1 if you don\'t enter any number'))
	if (userNumber != -1) {
		userNumbers.push(userNumber)
	}
}

for (var i = 0 ; i < userNumbers.length ; i++) {
	// console.log(userNumbers[i])
	sum += userNumbers[i]
}

console.log(userNumbers)
console.log("Average: ", sum / userNumbers.length)