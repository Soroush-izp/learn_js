let $ = document
let weight = $.getElementsByTagName('input')[0]
let weightVal = $.querySelector('#weight-val')
let height = $.getElementsByTagName('input')[1]
let heightVal = $.querySelector('#height-val')
let result = $.querySelector('#result')
let category = $.querySelector('#category')
let heightM
let bmi


function calculate () {
   weightVal.innerHTML = weight.value + ' kg'
   heightVal.innerHTML = height.value + ' cm'
   heightM = +height.value / 100
   bmi = +weight.value / (heightM * heightM)
   result.innerHTML = bmi.toFixed(1)
   if (bmi.toFixed(1) < 18.5) {
      category.innerHTML = 'LowWeight'
      result.style.color = 'orange'
   } else if (bmi.toFixed(1) >= 18.5 && bmi.toFixed() <= 24.9) {
      category.innerHTML = 'NormalWeight'
      result.style.color = 'Green'
   } else if (bmi.toFixed(1) >= 25 && bmi.toFixed() <= 29.9) {
      category.innerHTML = 'OverWeight'
      result.style.color = 'orange'
   } else if (bmi.toFixed(1) >= 30) {
      category.innerHTML = 'Obese'
      result.style.color = 'red'
   }
}
// 18.5 : low Weight  orange/ Normal Weight :18.5 bet 24.9 Green/ overWeight 25 bet 29.9 orange/ 
// Obese 30  red