var userNumber = +prompt("Enter a number : ");

for ( var sumOfDigits = 0; userNumber > 0;) {
    sumOfDigits += userNumber % 10;
    userNumber = Math.floor(userNumber /= 10);
};
alert(`Number Num Sum : ${sumOfDigits}`);