var userFirstNumber = Number(prompt("Enter The First Number: ", 0));
var userSecondNumber = Number(prompt("Enter The Second Number: ", 0));


if (userFirstNumber % 2 === 0) {
  while (userFirstNumber < userSecondNumber) {
    console.log(userFirstNumber);
    userFirstNumber += 2;
  }
} else {
  userFirstNumber++;
  while (userFirstNumber < userSecondNumber) {
    console.log(userFirstNumber);
    userFirstNumber += 2;
  }
}
