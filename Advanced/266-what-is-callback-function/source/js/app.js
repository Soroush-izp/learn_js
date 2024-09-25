const btn = document.querySelector('button')

// function clickHandler () {
//     console.log('Clicked');
//     //  return undefined
// }

// btn.addEventListener('click', clickHandler)


function logger (callbackFunc) {
    // console.log(func);
    console.log('logged (1)');
    callbackFunc()
}

function logger2 () {
    console.log('Logged (2)');
}

// logger(logger2)

let numbers = [1, 2, 3, 4, 5, 6]

numbers.map(function (item) {
    console.log(item);
})