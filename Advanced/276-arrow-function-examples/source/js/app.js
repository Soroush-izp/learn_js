// Arrow Function

let numbers = [1, 4, 2, 8, 76, 32, 99, 34]

// numbers.forEach(number => console.log(number))

let mapDatas = numbers.map(number => number * 2)

console.log(mapDatas);

// //////////////////////////////////////

const btn = document.querySelector('button')

btn.addEventListener('click', (event) => {
    console.log(event);
})