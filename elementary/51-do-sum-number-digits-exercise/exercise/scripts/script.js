var userNumber = Math.abs(+prompt("Enter a Number")), 
numDigitsCounter = 0;

if (isNaN(userNumber)) {
    alert("What You type not a number")
} else {
    if (userNumber === 0) {
        numDigitsCounter++;
    } else {
        for (; userNumber > 0; numDigitsCounter++) {
            userNumber = Math.floor(userNumber / 10);
        }
    }
    alert(`Number Digits : ${numDigitsCounter}`)
}
