let $ = document
let range = $.querySelector('#range')
let container = $.querySelector('.container')

function brightnessChange () {
   // console.log('.');
   container.style.filter = 'brightness(' + range.value + '%)'
}
range.addEventListener('mousemove', brightnessChange)