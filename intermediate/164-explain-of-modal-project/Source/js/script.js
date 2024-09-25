let $ = document
let btn = $.getElementsByTagName('button')[0]
let modalParent = $.querySelector('.modal-parent')
let centerSection = $.querySelector('.center-sec')
let X = $.querySelector('.X')

function showModal() {
   modalParent.style.display = 'block'
   centerSection.style.filter = 'blur(6px)'
}
function hideModal() {
   modalParent.style.display = 'none'
   centerSection.style.filter = 'blur(0)'
}
btn.addEventListener('click', () => {
   showModal()
})
X.addEventListener('click', () => {
   hideModal()
})
document.body.addEventListener('keyup', (event) => {
   if (event.code == 'Escape') {
   hideModal()
   }
})
