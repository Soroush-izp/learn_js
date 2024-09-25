//  (: همین الان شروع کنین و بنویسین

let $ = document, 
countriesCities = {
   Iran: ['Amol', 'Tehran', 'Shiraz', 'Esfehan', 'Mashhad', 'Tabriz', 'rasht'], 
   Canada: ['Vancover', 'Torento', 'Kebek', 'Admonton', 'Otava', 'Kalgery'], 
   US: ['New York', 'San Francisco', 'Chicago']
}, 
countrySelect = $.querySelector('.countrySelect'), 
citySelect = $.querySelector('.citySelect'), 
countryCityValue

countrySelect.addEventListener('change', countrySelectFunction)

function countrySelectFunction() {
   countryCityValue = countriesCities[countrySelect.value]
   citySelect.innerHTML = '<option>Select City ...</option>';

   if (!(countryCityValue == 'Please Select')) {
         countryCityValue.forEach(function (item) {
         citySelect.innerHTML += '<option>' + item + '</option>';
         // let newOption
         // newOption = $.createElement('option')
         // newOption.innerHTML = item
         // newOption.value = item
         // citySelect.appendChild(newOption)
      })
   }
}