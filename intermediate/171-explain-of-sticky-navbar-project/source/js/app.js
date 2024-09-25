let $ = document
let mainNav = $.querySelector('#mainNav')
let img = $.getElementsByTagName('img')[0]

$.addEventListener('scroll', () => {
   if ($.documentElement.scrollTop > 0) {
      // mainNav.classList.add('bg-black')
      // mainNav.classList.add('txt-white')
      mainNav.className = 'bg-black txt-white'
      img.style.height = '64px'
   } else {
      mainNav.classList.remove('bg-black')
      mainNav.classList.remove('txt-white')
      img.style.height = '84px'
   }
})