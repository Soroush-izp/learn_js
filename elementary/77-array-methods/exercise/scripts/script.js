var userWord = prompt("say something :").toLowerCase(), 
r = userWord.length - 1, 
i = 0, 
flag = true;

while (i <= r) {
   if (userWord[i] !== userWord[r]) {
      flag = false;
      console.log("Your word is not symmetrical !");
      break;
   }
   ++i;
   --r;
}
if (flag) {
   console.log("Your word is symmetrical :)");

}
