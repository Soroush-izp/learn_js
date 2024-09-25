// DRY => Don't ...

// function Animal () {
//     this.name = 'dog'
//     this.color = 'brown'
//     this.canFly = false
//     this.footsCount = 4
// }

// let dogAnimal = new Animal()

// let dogAnimal2 = new Animal()

// console.log(dogAnimal2);



///////////////////////////////////////////////////////////////

function Person (personID, personUserName, personAge, personJob, personType) {
    this.id = personID
    this.username = personUserName
    this.age = personAge
    this.job = personJob
    this.type = personType
}


let userAli = new Person(1, 'Ali', 19, 'Digital Marketing', 'user')
let userAmin = new Person(2, 'Amin', 22, 'Js Developer', 'Admin')

console.log(userAmin);

