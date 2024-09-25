var Score = +prompt("Enter Your Score :");

// ===  check type
// switch (Score) {
//     case 20:
//     case 19:
//     case 18:
//         alert("Level A :)");
//         break;
//     case 17:
//     case 16:
//     case 15:
//         alert("Level B");
//         break;
//     case 14:
//     case 13:
//     case 12:
//         alert("Level C");
//         break;
//     default:
//         alert("mashroot :(");
//         break;
// };

if (Score <= 20 && Score >= 18) {
    alert("Level A :)");
} else if (Score <= 17 && Score >= 15) {
    alert("Level B");
} else if (Score <= 14 && Score >= 12) {
    alert("Level C");
} else if (Score < 12 && Score >= 0) {
    alert("mashroot :(");
} else {
    alert("Your Input Out Of Range :(");
};