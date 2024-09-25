let userName = document.querySelector('.username'), 
password = document.querySelector('.password'), 

usernameValidation = document.querySelector('#user'), 
passwordValidation = document.querySelector('#pass');

function validUsername () {
   validInput (userName, 12, usernameValidation);
}

function validPassword () {
   validInput (password, 8, passwordValidation);
}

function validInput (input, length, validation) {
   if (input.value.length >= length) {
      validation.innerHTML = "Your input is valid";
      validation.style.color = '#4caf50';
      validation.style.display = 'block';
      input.style.borderBottom = '.1rem solid #4caf50';
   } else {
      validation.innerHTML = "Your input is too short!";
      validation.style.color = 'rgb(223, 28, 28)';
      validation.style.display = 'block';
      input.style.borderBottom = '.1rem solid rgb(223, 28, 28)';
   }
}
