// Es6 - Class (setter getter extends ... )

class Person {

    constructor (personname, personAge, personJob, personAddress) {
        // console.log('نمونه از روی نقشه (کلاس) ساخته شد ---> ', personname, personAge, personJob, personAddress);

        this.personname = personname
        this.personAge = personAge
        this.personJob = personJob
        this.personAddress = personAddress
    }

    // startDev () {
    //     console.log(`برنامه نویس ${this.username} کارشو استارت زد`);
    // } 

    startDev () {
        console.log(`برنامه نویس ${this.username} کارشو استارت زد`);
    } 

    getAge () {
        return this.personAge
    }

}

class Prefessor extends Person {

    constructor (personname, personAge, personJob, personAddress, personLesson, yearsOfjob) {

        super(personname, personAge, personJob, personAddress)
        
        this.personLesson = personLesson
        this.yearsOfjob = yearsOfjob
    }

    startDev () {
        console.log(super.getAge());
        console.log(`استاد ${this.personname} تدریسش رو شروع کرد`);
    }

}

// Todo - Booklist (id, title, isDoing) Exercise

// DRY => Don't Repeat Yourself

let prefessorRamin = new Prefessor('Ramin', 32, 'Prefessor', 'Tabriz', 'C++', 8)

console.log(prefessorRamin.startDev());


let personAli = new Person('Ali', 19, 'Android Developer', 'Tehran') // Call
let personAmir = new Person('Amir', 22, 'Web Developer', 'Tabriz') // Call
let personMohammad = new Person('Mohammad', 21, 'Seo', 'Shiraz') // Call

// personAmir.startDev() // Call

// console.log(Person.username);

// console.log(personAli);
// console.log(personAmir);
// console.log(personMohammad);