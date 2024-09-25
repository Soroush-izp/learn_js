// Entries

let person = {
    id: 1,
    firstName: 'Amin',
    lastName: 'Saeedi Rad',
    age: 22,
    job: 'Web Developer'
}

let entriesPerson = Object.entries(person)

for (let userProps of entriesPerson) {
    console.log(`${userProps[0]} : ${userProps[1]}`);
}

console.log(entriesPerson);