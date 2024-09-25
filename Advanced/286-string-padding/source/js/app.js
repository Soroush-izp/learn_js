// String Padding

// let username = 'amin'
// console.log(username.padStart(10));
// console.log(username.padEnd(6, '?'));

//////////////////////////////////////////////////////

// let size = '6' // 1 01 2 02
// console.log(size.padStart(2, '0'));

/////////////////////////////////////////////////////

let phoneNumber = '09921558293'
let last4Digits = phoneNumber.slice(-4)
let finalPhoneNumber = last4Digits.padStart(phoneNumber.length, '*')

console.log(finalPhoneNumber);