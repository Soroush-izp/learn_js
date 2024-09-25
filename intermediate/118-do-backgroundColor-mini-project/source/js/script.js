// console.log(document.body)

// let colorsArray = ['red', 'yellow', 'blue', 'green', 'pink', 'gray']
// let randomColorIndex

// setInterval(function () {
//     randomColorIndex = Math.floor(Math.random() * colorsArray.length)
//     document.body.style.backgroundColor = colorsArray[randomColorIndex]
// }, 2000)


///////////// Second Way //////////////////

let redValue, greenValue, blueValue, 
h1 = document.getElementsByTagName('h1')[0];


setInterval(function () {

    redValue = Math.floor(Math.random() * 255)
    greenValue = Math.floor(Math.random() * 255)
    blueValue = Math.floor(Math.random() * 255)

    // console.log('rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')')

    document.body.style.backgroundColor = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'
    
    redValue = Math.floor(Math.random() * 255)
    greenValue = Math.floor(Math.random() * 255)
    blueValue = Math.floor(Math.random() * 255)
    h1.style.color = 'rgb(' + redValue + ',' + greenValue + ',' + blueValue + ')'

}, 2000)

