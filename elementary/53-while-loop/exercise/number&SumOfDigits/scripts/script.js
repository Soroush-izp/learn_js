var userNumber = Math.abs(+prompt("Enter Your Number :")), 
sumOfDigits = 0, 
numberOfDigits = 0;


if (isNaN(userNumber)) {
    alert("Your Input isn't Number")
} else {
    if (userNumber == 0) {
        numberOfDigits++;
    } else {
        while (userNumber > 0) {
            sumOfDigits += userNumber % 10;
            userNumber = Math.floor(userNumber / 10);
            numberOfDigits++;
        }
    }
    alert(` Sum of digits: ${sumOfDigits} \n number of digits : ${numberOfDigits}`)
}

