var userNumber = Number(prompt('Enter The Number: ', 0))
var sum = 0
var counter = 0

while (userNumber / 10 != 0) {
	sum = sum + (userNumber % 10)
	counter++
	userNumber = Math.floor(userNumber / 10)
}

alert('Sum of digits: ' + sum + '\n\n' + 'Count of digits: ' + counter)