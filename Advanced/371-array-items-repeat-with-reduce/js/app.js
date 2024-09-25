let numbers = [1, 3, 12, 90, 3, 12, 100]

// numbers.reduce((prevValue, currentValue) => {
//     console.log(prevValue, currentValue); // 'SabzLearn' ...

//     return currentValue
// }, 'SabzLearn')

let itemRepeatObject = numbers.reduce((obj, currentItem) => {

    // console.log({...obj, [currentItem]: (obj[currentItem] || 0) + 1})

    return {...obj, [currentItem]: (obj[currentItem] || 0) + 1}
}, {})

console.log(itemRepeatObject);