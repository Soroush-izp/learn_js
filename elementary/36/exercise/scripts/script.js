let userName = prompt("UserName (3 char) :"), 
password = prompt("Password :");

if (userName.length < 3 && password.length < 8) {
    alert("The number of characters in the username & password is incorrect :(");
} else if (userName.length < 3) {
    alert("The number of characters in the username is incorrect :(");
} else if (password.length < 8) {
    alert("The number of characters in the password is incorrect :(");
} else {
    alert("Everything Ok :)");
}