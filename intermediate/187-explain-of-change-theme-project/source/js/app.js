const switchElement = document.querySelector('.switch')
const $ = document
if (localStorage.getItem('theme') === 'dark') {
  localStorage.setItem('theme', 'light')
  switchTheme ()
}
function switchTheme () {
  if (localStorage.getItem('theme') === 'dark') {
    $.body.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  } else {
    $.body.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }
}
switchElement.addEventListener('click', function () {
  // Hint: Add 'dark' class to body :))
  switchTheme ()
})
