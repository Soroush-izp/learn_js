var userAge = Number(prompt("Enter Your Age: ", 0)); // 25

// alert(userAge)

if (userAge < 18) { // Scope = ناحیه
  alert("شما مجاز به ورود نیستید");
} else {
  alert("شما مجاز به ورود به پنل هستید");
}
