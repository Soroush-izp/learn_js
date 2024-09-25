// Es6 - Class (setter getter extends ... )

class Person {

    constructor (personname, personAge, personJob, personAddress) {
        // console.log('نمونه از روی نقشه (کلاس) ساخته شد ---> ', personname, personAge, personJob, personAddress);

        this.username = personname
        this.personAge = personAge
        this.personJob = personJob
        this.personAddress = personAddress
    }

    // startDev () {
    //     console.log(`برنامه نویس ${this.username} کارشو استارت زد`);
    // } 

    startDev = () => {
        console.log(`برنامه نویس ${this.username} کارشو استارت زد`);
    } 

}

let personAli = new Person('Ali', 19, 'Android Developer', 'Tehran') // Call
let personAmir = new Person('Amir', 22, 'Web Developer', 'Tabriz') // Call
let personMohammad = new Person('Mohammad', 21, 'Seo', 'Shiraz') // Call

personAmir.startDev() // Call

// console.log(Person.username);

// console.log(personAli);
// console.log(personAmir);
// console.log(personMohammad);