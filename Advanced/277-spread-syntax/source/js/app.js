// Spread Syntax

let numbers = [1, 3, 2, 5, 4, 34]

// console.log(numbers[0], numbers[1], numbers[2], numbers[3]);

// numbers.forEach(number => console.log(number))

// let copyNumbers = numbers

// copyNumbers.push(90)

// console.log('number:', numbers);
// console.log('Copy number:', copyNumbers);

// console.log(...numbers)

let copyNumbers = [...numbers]

copyNumbers.push(90)

// console.log('number:', numbers);
// console.log('Copy number:', copyNumbers);

let nums1 = [1, 2, 3, 4]
let nums2 = [5, 6, 7, 8]

let allNumbers = [...nums1, 100, ...nums2]

console.log(allNumbers);
