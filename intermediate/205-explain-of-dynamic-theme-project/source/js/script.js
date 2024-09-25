let $ = document
let btn = $.querySelectorAll('.btn')

if (localStorage.getItem('themeColor') != null) {
   $.documentElement.style.setProperty('--theme-color', localStorage.getItem('themeColor'))
}
btn.forEach( (item) => {
   item.addEventListener('click', (event) => {
      $.documentElement.style.setProperty('--theme-color', event.target.dataset.color)
      localStorage.setItem('themeColor', event.target.dataset.color)
   })
})