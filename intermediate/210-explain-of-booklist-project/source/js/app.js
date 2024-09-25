let $ = document
let inpTitle = $.querySelector('#title')
let inpAuthor = $.querySelector('#author')
let inpYear = $.querySelector('#year')
let submit = $.querySelectorAll('input')[3]
let bookLists = []
let index = -1
let table = $.querySelector('table')

if (localStorage.getItem('bookLists')) {
   let bookList = JSON.parse(localStorage.getItem('bookLists'))
   bookList.forEach( (item) => {
      bookLists.push(item)
      addBook (item)
   })
}
function submitClick () {
   if (inpTitle.value != '' && inpAuthor.value != '' && inpYear.value != '') {
      let submitValue = getSubmit ()
      bookLists.push(submitValue)
      updateLocalBookLists ()
      addBook (submitValue)
      inputReset ()
   } else {
      alert('please Enter information!')
   }
}
function getSubmit () {
   let abook = {}
   abook.title = inpTitle.value
   abook.author = inpAuthor.value
   abook.year = inpYear.value
   return abook
}
function addBook (book) {
   // let tbody = $.createElement('tbody')
   // tbody.classList = 'book-list'
   let tr = $.createElement('tr')
   let thTitle = $.createElement('th')
   thTitle.innerHTML = book.title
   let thAuthor = $.createElement('th')
   thAuthor.innerHTML = book.author
   let thYear = $.createElement('th')
   thYear.innerHTML = book.year
   tr.append(thTitle, thAuthor, thYear)
   // tbody.append(tr)
   table.append(tr) // tbody
   removeBook ()
}
function updateLocalBookLists () {
   localStorage.setItem('bookLists', JSON.stringify(bookLists))
}
function inputReset () {
   inpTitle.value = ''
   inpAuthor.value = ''
   inpYear.value = ''
}
function removeBook () {
   let book = $.querySelectorAll('tr')
   book.forEach( (item) => {
      index++
      item.addEventListener('click', (event) => {
         event.target.parentNode.remove()
         bookLists = bookLists.splice(index, 1)
         updateLocalBookLists ()
      })
   })
}

submit.addEventListener('click', submitClick)
submit.addEventListener('click', (event) => {event.preventDefault()})
window.addEventListener('click', (event) => {
   if (event.key === 'enter') {
      submitClick ()
   }
})