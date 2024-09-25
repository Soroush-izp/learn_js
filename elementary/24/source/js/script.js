var userAge = prompt("Enter Your Age: ", 18)
var userSex = prompt('Enter Your Sex (male, female)', '')

if (userSex === 'female' || userAge < 18) {
  alert("متاسفانه شما مجاز به ورود نیستید")
} else {
  alert("شما می توانید به پنل خود وارد شوید :)")
}