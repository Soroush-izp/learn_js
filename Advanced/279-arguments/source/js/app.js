
function sum (a, b, c) {
    // console.log('a', a);
    // console.log('b', b);
    // console.log('c', c);
    // console.log(arguments);

    let sumAllArgs = 0

    let arrayArgs = Array.from(arguments)

    arrayArgs.forEach(item => sumAllArgs += item)

    return sumAllArgs
}

console.log(sum(2, 1, 4, 5, 2, 10));