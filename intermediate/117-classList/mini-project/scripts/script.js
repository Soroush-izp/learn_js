let $ = document
let h1 = $.getElementsByTagName('h1')[0], 
letters = '0123456789ABCDEF' 


setInterval(() => {

   let color = '#';
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
   }
   $.body.style.backgroundColor = color;

   color = '#'
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
   }
   h1.style.color = color
}, 3000);


