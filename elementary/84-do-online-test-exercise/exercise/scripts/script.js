var userCalc = prompt("Enter your Number :"), 
op, 
op2, 
num1 = 0, 
num2 = 0, 
state = false

for (var i = 0; i < userCalc.length; i++) {
   if (userCalc[i] == '+' || userCalc[i] == '-' || userCalc[i] == '*' || userCalc[i] == '/') {
      op = userCalc[i];
      state = true;
      if (userCalc[i+1] == '*' && op == '*') {
         op2 = '*';
      }
   } else if (userCalc[i] >= 0 && userCalc[i] <= 9 && !state && !(userCalc[i] == ' ')) {
      num1 = num1 * 10 + (+userCalc[i]);
   } else if (userCalc[i] >= 0 && userCalc[i] <= 9 && state && !(userCalc[i] == ' ')) {
      num2 = num2 * 10 + (+userCalc[i]);
   } else if (userCalc[i] == '=') {
      if (op == '*' && op2 == '*') {
         console.log(`${num1} ${op}${op2} ${num2} = ${num1 ** num2}`);
         break;
      }
      switch (op) {
         case '+':
            console.log(`${num1} ${op} ${num2} = ${num1 + num2}`);
            break;
         case '-':
            console.log(`${num1} ${op} ${num2} = ${num1 - num2}`);
            break;
         case '*':
            console.log(`${num1} ${op} ${num2} = ${num1 * num2}`);
            break;
         case '/':
            console.log(`${num1} ${op} ${num2} = ${num1 / num2}`);
            break;
         default:
            console.log("you enter wrong operator");
            break;
      }
   }
}