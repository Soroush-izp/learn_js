var users = [
    {id: 1, name: 'amin', family: 'saeedirad', age: 21, email: 'ce01010101it@gmail.com'},
    {id: 2, name: 'amir', family: 'hoyeiny', age: 19, email: 'amir@gmail.com'},
    {id: 3, name: 'ali', family: 'mohammadi', age: 10, email: 'ali@gmail.com'},
]

// users.forEach(function (each) {
//     console.log(each);
// })

// users.forEach((item, index, array) => {
//     console.log(item, index, array);
// });

// users.forEach((each, c, a) => {
//     console.log(each, c, a);
// });

users.forEach((each, num) => {
    console.log(num + " id :" + each.id + " name :" + each.name + " family :" + each.family + " age :" + each.age + " email :" + each.email);
});