// Rest Operator

const sum = (a, ...args) => {
    console.log('a', a);
    // console.log('b', b);
    // console.log('c', c);
    console.log('args', args);
    // console.log(arguments);

    let sumAllArgs = 0

    args.forEach(item => sumAllArgs += item)

    return sumAllArgs
}

console.log(sum(2, 1, 4, 5, 2, 10));