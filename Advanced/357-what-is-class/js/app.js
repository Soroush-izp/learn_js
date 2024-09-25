function User (username, userAge, userJob) {
    this.name = username
    this.age = userAge
    this.job = userJob

    this.getName = function () {
        return this.name
    }

    this.getAge = function () {
        return this.age
    }

    this.getJob = function () {
        return this.job
    }

    this.setName = function (newName) {
        this.name = newName
    }

    this.setAge = function (newAge) {
        this.age = newAge
    }

    this.setJob = function (newJob) {
        this.job = newJob
    }
}

let userAli = new User('Ali', 19, 'Android Developer')
let userAmir = new User('Amir', 22, 'Web Developer')

userAli.setAge(24)

// console.log(userAmir.getJob());


// Es6 - Class (setter getter extends ... )

class Person {

    constructor (personname, personAge, personJob, personAddress) {
        // console.log('نمونه از روی نقشه (کلاس) ساخته شد ---> ', personname, personAge, personJob, personAddress);

        this.username = personname
        this.personAge = personAge
        this.personJob = personJob
        this.personAddress = personAddress
    }

}

let personAli = new Person('Ali', 19, 'Android Developer', 'Tehran') // Call
let personAmir = new Person('Amir', 22, 'Web Developer', 'Tabriz') // Call
let personMohammad = new Person('Mohammad', 21, 'Seo', 'Shiraz') // Call

// console.log(personAli);
// console.log(personAmir);
// console.log(personMohammad);

console.log(personAli.personJob);