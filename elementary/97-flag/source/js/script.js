// Flag => پرچم

var userName = prompt('Enter The Username: ')

var users = ['ali', 'amin', 'amir', 'babak']

var loginFlag = false

for (var i = 0 ; i < users.length ; i++) {
    if (users[i] === userName) {
        loginFlag = true
    }
}

console.log("Flag: ", loginFlag)

if (loginFlag) {
    alert('لاگین شدین')
} else {
    alert('شما ثبت نام نکردید')
}