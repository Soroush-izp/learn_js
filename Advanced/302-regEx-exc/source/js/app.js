let emailRegEx = /.+@.+\.com/

let userEmail = prompt('Plz Enter Your Email: ')

console.log(emailRegEx.test(userEmail))
// emailRegEx.replace()

// amin@gmail.com  babak@gmail.com  amir_amiri@gmail.com
// / .+@.+.com /