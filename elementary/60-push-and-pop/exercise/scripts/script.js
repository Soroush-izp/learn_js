var sumArr = [],
   sum = 0,
   userNumber;
do {
   userNumber = prompt("Enter a Number : \n(for Break Enter -1 or Empty)");
   if (
      userNumber !== "" &&
      userNumber !== null &&
      userNumber !== undefined &&
      +userNumber !== -1
   ) {
      sumArr.push(+userNumber);
      continue;
   }
   break;
} while (1);

// for (var i = 0; i < (sumArr.length); i++) {
//     sum += sumArr[i];
// }
for (var item of sumArr) {
   sum += item;
}

console.log(`Average is : ${sum / sumArr.length}`);
