let $ = document
let title = $.querySelector('.title')


window.addEventListener('keyup', (event) => {
   if (!(event.key === 'Backspace')) {
      let key = $.querySelector('#' + event.key.toUpperCase())
      key.classList.add('hit')
      title.innerHTML += event.key
      key.addEventListener('animationend', () => {
         key.classList.remove('hit')
      })
   } else if (event.key === 'Backspace') {
      title.innerHTML = title.innerHTML.slice(0, -1)
   }
})