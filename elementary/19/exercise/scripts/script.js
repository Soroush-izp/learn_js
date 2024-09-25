var birthYear = +prompt("Enter Your Birth Year :");

if (isNaN(birthYear) || birthYear > 1402) {
    alert(`Enter correct input`);
} else {
    alert(`Your Age : ${1402 - birthYear}`);
};
