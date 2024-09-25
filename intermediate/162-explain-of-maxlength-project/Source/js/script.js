let $ = document, 
input = $.querySelector('#input'), 
counter = $.querySelector('.counter'), 
maxLength = input.getAttribute('maxlength')

input.addEventListener('keyup', () => {
   counter.innerHTML = maxLength - input.value.length
   // counter.innerHTML = input.getAttribute('maxlength') - input.value.length
})