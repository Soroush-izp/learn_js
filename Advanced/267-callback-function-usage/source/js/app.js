
function firstLogs() {
    console.log(1);
    console.log(2);
}

function middleLog(callback) {
    setTimeout(function () {
        console.log(3);
        callback()
    }, 5000);
}

function lastLogs() {
    console.log(4);
    console.log(5);
}

firstLogs()
middleLog(lastLogs)