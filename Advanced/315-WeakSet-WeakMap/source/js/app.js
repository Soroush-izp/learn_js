// let mySet = new Set()

// mySet.add('Ali')

// console.log('Set:', mySet, " && Size:", mySet.size);




// let myWeakSet = new WeakSet()

// let fakeObj = { data: 'Fake Data' }

// myWeakSet.add(fakeObj)

// console.log('Weak Set:', myWeakSet, " && Size:", myWeakSet.size);



/////////////////////////////////////////////////////////////////////////////////

function FakeData () {
    this.data = {
        data: 'Fake Data'
    }
}

window.fakeData = new FakeData()

let mySet = new WeakSet()

mySet.add(window.fakeData)

delete window.fakeData

console.log(window.fakeData); // Undefined

console.log(mySet);