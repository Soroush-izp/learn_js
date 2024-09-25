

let user = {
    id: 1,
    username: 'Amin',
    age: 22
}

// Set, Map

// //////////////////////////////////////////////////////

let numbers = new Set()

numbers.add(20)
numbers.add(12)
numbers.add(20)
numbers.add(12)
numbers.add(10)
numbers.add(90)
numbers.add(100)

let arrayNumbers = [...numbers]

// console.log(numbers, typeof numbers);
// console.log(arrayNumbers);


for (let number of numbers) {
    console.log(number);
}


// console.log(numbers.has(12));

// console.log('Before Delete', numbers, ' && Size =>', numbers.size);

// numbers.delete(20)

// console.log('After Delete', numbers, ' && Size =>', numbers.size);

// numbers.clear()

// console.log('After Clear', numbers, ' && Size =>', numbers.size);

// numbers.forEach(number => console.log(number))


// let scores = [
//     12, 
//     17,
//     89,
//     90,
//     43,
//     21,
//     17,
//     12,
//     21
// ]

// let setScores = new Set([1, 5, 2, 1, 2, 5, 6])

// console.log('Scores Array:', scores);
// console.log('Scores Set:', setScores);