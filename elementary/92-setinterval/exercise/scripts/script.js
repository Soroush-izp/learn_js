let minute = +prompt("Enter a minute :"), 
second = +prompt("Enter a second :");


let timer = setInterval(() => {
   if (second === 0 && minute === 0) {
      clearInterval(timer);
      alert("time passed!");
   } else if (second === -1 && minute >= 1) {
      second = 59;
      minute--;
   }
   console.log(`${minute} : ${second}`);
   second--;
}, 1000);