let h1Elem = document.querySelector('.title')

// h1Elem.addEventListener('click', function () {
//     console.log('Clicked')
// })

h1Elem.addEventListener('click', clickEvent)

function clickEvent () {
    console.log('Clicked On H1 Elem')
}