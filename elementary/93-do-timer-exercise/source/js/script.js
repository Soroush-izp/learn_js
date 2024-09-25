var minute = +prompt('Enter The Minute: ') // 1
var second = +prompt('Enter The Second: ') // 12

var timer = setInterval(function () {
    // codes

    if (second === -1) {
        minute--
        second = 59
    }

    if (minute === 0 && second === 0) {
        clearInterval(timer)
    }

    console.log('Timer: ' + minute + ' : ' + second)
    second--
}, 1000)