let numbers = [1, 2, 5, 4, 3, 9]

numbers.map // مقدماتی
numbers.filter // مقدماتی
numbers.reduce // پیشرفته

// numbers.reduce((prevValue, currentValue) => {
//     console.log(prevValue, currentValue); // 1 2 | 2 5 | 5 4 | 4 3 | 3 9

//     return 'SabzLearn' // 1 2 | SabzLearn 5 | SabzLearn ? ...
// })

let val = numbers.reduce((privVal, curentVal) => {
    console.log(`priv:${privVal}, curentVal:${curentVal}`);
    return privVal + curentVal;
}, 0)

console.log(val);

// let val = numbers.reduce((privVal, curentVal) => {
//     console.log(`priv:${privVal}, curentVal:${curentVal}`);
//     return curentVal;
// }, 0)

// console.log(val);