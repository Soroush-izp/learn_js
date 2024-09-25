let numbers = [1, 3, 2, 5, 4]
let userName = 'SabzLearn.ir'

let user = {
    id: 1,
    name: 'Ali',
    age: 19
}


// Iterable => قابل پیمایش - قابل شمارش
// Like-Array

// for (let property of user) {
//     console.log(property);
// }

////////////////////////////////////////////////////////////

function sum () {
    console.log(arguments);
    // arguments.forEach()

    let allArgsSum = 0

    for (let arg of arguments) {
        allArgsSum += arg
    }

    return allArgsSum
}

// console.log('Sum: ', sum(1, 2, 3, 4));

/////////////////////////////////////////////////////////

let liElems = document.getElementsByTagName('li')

// liElems.forEach()

for (let li of liElems) {
    console.log(li);
    li.addEventListener('click', e => e.target.remove())
}

// console.log(liElems);