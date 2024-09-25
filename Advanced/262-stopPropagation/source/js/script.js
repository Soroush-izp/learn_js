const divElems = document.querySelectorAll('div')

divElems.forEach(function (div, index) {

    div.addEventListener('click', function (event) {

        event.stopPropagation()

        console.log('Div ' + (index + 1));

        event.target.style.backgroundColor = 'blue'
    })

})