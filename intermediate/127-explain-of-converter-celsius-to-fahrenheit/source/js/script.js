let $ = document, 
state = true, 
input = $.querySelector('#converter'), 
result = $.querySelector('.result'), 
Fahrenheit, 
Celsius

// state change
function change () {
   if (state) {
      state = false;
   } else {
      state = true;
   }
   setStateChanges (state);
}
// true : c to f || false : f to c 
function setStateChanges (state) {
   if (state) {
      $.title = 'SalzLearn| Js | °C to °F'
      $.querySelector('#converter__title').innerHTML = 'Converter <span class="C">°C</span> to <span class="F">°F</span>'
      input.placeholder = '°C'
   } else {
      $.title = 'SalzLearn| Js | °F to °C'
      $.querySelector('#converter__title').innerHTML = 'Converter <span class="F">°F</span> to <span class="C">°C</span>'
      input.placeholder = '°F'
   }
}
// reset
function reset () {
   input.value = ''
   result.innerHTML = ''
   // state = true
   // setStateChanges (state);
}
// convert
function convert () {
   if (input.value == '') {
      wrongResultColor ()
      result.innerHTML = 'write correct value!'
   } else if (isNaN(input.value)) {
      wrongResultColor ()
      result.innerHTML = 'wrong value!'
   } else {
      if (state) {
         correctResultColor ()
         result.innerHTML = input.value + '°C to ' + celsiusToFahrenheit (+input.value).toFixed(2) + '°F'
      } else {
         correctResultColor ()
         result.innerHTML = input.value + '°F to ' + fahrenheitToCelsius (+input.value).toFixed(2) + '°C'
      }
   }
}
// calculate
function celsiusToFahrenheit (Celsius) {
   return Fahrenheit = (Celsius * 9/5) + 32
}
function fahrenheitToCelsius (Fahrenheit) {
   return Celsius = (Fahrenheit - 32) * 5/9 
}
// Result correct | wrong Color
function correctResultColor () {
   result.style.color = 'rgb(255, 255, 102)'
}
function wrongResultColor () {
   result.style.color = 'red'
}