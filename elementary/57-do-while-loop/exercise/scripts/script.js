var a = prompt("num1"),
   b = prompt("num2");

pow(a, b);
function pow(a, b) {
   var c = a;
   do {
      b--;
      a *= c;
   } while (b > 1);
   console.log(a);
}
