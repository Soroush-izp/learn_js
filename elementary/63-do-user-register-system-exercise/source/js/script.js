var users = [
  {id: 1, name: 'amin', family: 'saeedirad', age: 21, email: 'ce01010101it@gmail.com'},
  {id: 2, name: 'amir', family: 'hoyeiny', age: 19, email: 'amir@gmail.com'},
  {id: 3, name: 'ali', family: 'mohammadi', age: 10, email: 'ali@gmail.com'},
]

var userName = prompt('Enter Your Name: ')
var userFamily = prompt('Enter Your Family: ')
var userAge = prompt('Enter Your Age: ')
var userEmail = prompt('Enter Your Email: ')

if (userName.length < 3 || userName.length > 10) {
  alert("نام شما حداقل 3 و حداکثر 10 کاراکتر میتواند داشته باشد")
} else if (userFamily.length < 3 || userFamily.length > 15) {
  alert("نام خانوادگی شما حداقل 3 و حداکثر 15 کاراکتر میتواند داشته باشد")
} else if (isNaN(userAge) || userAge.length > 3) {
  alert("لطفا سن را به درستی وارد کنید")
} else {
  var newUser = {
    id: 4,
    name: userName,
    family: userFamily,
    age: userAge,
    email: userEmail
  }
  users.push(newUser)
  
  console.log(users)
}
