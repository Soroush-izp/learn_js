var age = +prompt("Enter Your Age :"), 
gender = prompt("Enter Your Gender :");

if (age < 18 || gender === "girl") {
    alert("Error You Can't Access, This Content")
} else {
    alert("You Can Access")
}