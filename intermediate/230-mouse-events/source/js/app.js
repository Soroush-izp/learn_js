let test = document.querySelector('.test')

function mouseDownHandler () {
    console.log('Mouse Down');
}

function mouseUpHandler () {
    console.log('Mouse Up');
}

function mouseEnterHandler () {
    console.log('Mouse Enter');
}

function mouseLeaveHandler () {
    console.log('Mouse Leave');
}

function mouseOverHandler () {
    console.log('Mouse Over');
}

function mouseOutHandler () {
    console.log('Mouse Out');
}

function mouseMoveHandler (event) {
    // console.log('Mouse Move');
    console.log(event);
}

window.addEventListener('mousemove', (event) => {
    test.style.left = event.clientX + 'px'
    test.style.top = event.clientY + 'px'
})