var users = [
    { id: 1, name: 'surena', family: 'izadpanah', age: 16, email: 'surana@gmail.com'}, 
    { id: 2, name: 'mehdi', family: 'izadpanah', age: 27, email: 'mehdi@gmail.com'}, 
    { id: 3, name: 'soroush', family: 'izadpanah', age: 20, email: 'soroushizadpanah@gmail.com'},
], 
nam, 
family, 
age, 
email, 
repeat = false;

do {
    do {
        nam = prompt("name : ");
        if (!(nam.length >= 3 && nam.length <= 10)) {
            alert("Your name most be minimum 3 & maximum 10 characters !")
        }
    } while (!(nam.length >= 3 && nam.length <= 10));

    do {
        family = prompt("family : ");
        if (!(family.length >= 3 && family.length <= 15)) {
            alert("Your family most be minimum 3 & maximum 15 characters !")
        }
    } while (!(family.length >= 3 && family.length <= 15));

    do {
        age = prompt("age : ");
        if (isNaN(age) || age.length > 3) {
            alert("Your Age Most Be a Number !\nAnd Have Maximum 3 Characters !")
        }
    } while (isNaN(age) || age.length > 3);

    age = +age;
    email = prompt("email : ");
    
    users[users.length] = {};
    users[users.length-1]['id'] = users.length;
    users[users.length-1]['name'] = nam;
    users[users.length-1]['family'] = family;
    users[users.length-1]['age'] = age;
    users[users.length-1]['email'] = email;
    // repeat = confirm("You Want To Save Another User :")
} while(repeat)
// console.log(users);

// for (let item in users) {
//     console.log(users[item]);
// }

users.forEach(function (item) {
    console.log(item)
})


