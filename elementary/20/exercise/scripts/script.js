var minute = +prompt("Enter Your Time (Minutes):"), 
hour = 0

// while (minute >= 60) {
//     minute -= 60;
//     hour++;
// }
// alert(`hour: ${hour}, minute: ${minute}`);
if (isNaN(minute)) {
    alert(`Your Input Number Isn't correct`);
} else {
    alert(minute / 60);
}
