let $ = document
let searchInput = $.querySelector('.search-input')
let input = $.querySelector('input')
let listItem 
let autocomBox = $.querySelector('.autocom-box')
let searchSuggests = ''

input.addEventListener('keyup', (event) => {
   let word = event.target.value
   if (event.target.value === '') {
      searchInput.classList.remove('active')
   } else {
      searchInput.classList.add('active')
      searchSuggests = ''
      searchSuggests = suggestions.filter( (item) => {
            return item.toLowerCase().includes(word.toLowerCase())
      })
      autocomBox.innerHTML = ''
      if (searchSuggests == '') {
            autocomBox.innerHTML = '<li>' + input.value + '</li>'
      } else {
            searchSuggests.forEach( (item) => {
               autocomBox.innerHTML += '<li>'+ item +'</li>'
            });
      }
      select ()
   }
})

function select () {
   listItem = $.querySelectorAll('li')
   listItem.forEach( (list) => {
      list.addEventListener('click', (event) => {
         input.value = event.target.innerHTML
         searchInput.classList.remove('active')
      })
   })
}