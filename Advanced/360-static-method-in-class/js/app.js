class Person {

    constructor (personname, personAge, personJob, personAddress) {

        this.personname = personname
        this.personAge = personAge
        this.personJob = personJob
        this.personAddress = personAddress
    }

    startDev () {
        console.log(`برنامه نویس ${this.personname} کارشو استارت زد`);
    } 

    removePerson () {
        return 'شخص مورد نظر شما از شرکت حذف شد'
    }

    getAge () {
        return this.personAge
    }

}

let personAli = new Person('Ali', 19, 'Android Developr', 'Tehran')

console.log(personAli.removePerson());

// console.log(Person.removePerson());