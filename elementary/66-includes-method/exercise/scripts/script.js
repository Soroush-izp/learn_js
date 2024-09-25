var users = [
    {id: 1, name: 'amin', family: 'saeedirad', age: 21, email: 'ce01010101it@gmail.com'},
    {id: 2, name: 'amir', family: 'hoyeiny', age: 19, email: 'amir@gmail.com'},
    {id: 3, name: 'ali', family: 'mohammadi', age: 10, email: 'ali@gmail.com'},
]

var userName = prompt("Please enter your username :");
var isNameExist = users.some(user => {
    return userName == user.name;
})
if (isNameExist) {
    console.log("Welcome to your Panel :)");
} else {
    console.log("Your username incorrect :(");
}