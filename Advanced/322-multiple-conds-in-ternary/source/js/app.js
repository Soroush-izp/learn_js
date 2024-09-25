let score = 12

// let userStatus = score < 18 ? 'Faild' : 'Pass'

let userStatus = score > 0 && score <= 5 ? 'D'
    : score > 5 && score <= 10 ? 'C'
        : score > 10 && score <= 15 ? 'B'
            : score > 15 && score <= 20 ? 'A'
                : 'Not Valid'

console.log("Status:", userStatus);