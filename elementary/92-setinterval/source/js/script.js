var i = 10

var timer = setInterval(function () {
    // Coeds

    if (i === 0) {
        // clean interval
        alert('Game Over')
        clearInterval(timer)
    }

    console.log(i)
    i--
}, 1000)

// 1000ms = 1s