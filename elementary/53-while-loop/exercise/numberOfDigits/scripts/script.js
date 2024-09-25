var userNumber = Math.abs(+prompt("Enter Your Number : ")), 
digitsCounter = 0;
if (isNaN(userNumber)) {
    alert("Your Input Isn't Number");
} else {
    if (userNumber == 0) {
        digitsCounter++;
    } else {
        while (userNumber > 0) {
            digitsCounter++;
            userNumber = Math.floor(userNumber / 10);
        }
    }
    alert(`You have ${digitsCounter} Digits in Your Input`)
}