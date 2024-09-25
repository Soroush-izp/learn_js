let userName = document.querySelector('.username'), 
password = document.querySelector('.password'), 
modal = document.querySelector('.modal')

function validInput () {
   if (userName.value.length >= 12 && password.value.length >= 8) {
      modal.innerHTML = "Your input is valid";
      modal.style.backgroundColor = 'rgb(29, 4, 255)';
      modal.style.display = 'block';
   } else {
      modal.innerHTML = "Your user | pass is too short!";
      modal.style.backgroundColor = 'rgb(223, 28, 28)';
      modal.style.display = 'block';
   }
   modalShowTimer ()
}

function modalShowTimer () {
   setTimeout (function () {
      modal.style.display = 'none';
   }, 3000)
}