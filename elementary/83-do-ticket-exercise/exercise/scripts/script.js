var questions = [
   { question: 'shape of the earth?', answer: 'circle' }, 
   { question: 'what company make iphone ?', answer: 'apple' }, 
   { question: 'who is god ?', answer: 'morgan freeman' }, 
], 
userAnswer, 
point = 0;

questions.forEach(item => {
   userAnswer = prompt(item.question);
   if (userAnswer === item.answer) {
      point++;
   }
});
console.log(`Point : ${point}`);
