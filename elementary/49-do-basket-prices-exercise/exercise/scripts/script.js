for (var i = 1, sum = 0; i <= 5; i++) {
    sum += +prompt(`Enter Number ${i} :`, 0);
}
alert(`Average : ${sum / 5}`);