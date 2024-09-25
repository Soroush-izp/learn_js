var num1 = +prompt("Enter Number 1: "), 
num2 = +prompt("Enter Number 2: ");
if (num1 > num2) {
    var capsule = num1;
    num1 = num2;
    num2 = capsule;
}

var number = num1;

while (number <= num2) {
    if (number % 2 == 0) {
        alert(number)
    }
    number++;
}