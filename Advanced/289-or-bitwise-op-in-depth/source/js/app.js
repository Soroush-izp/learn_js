// && (AND)   || (OR)

let userAge = 18

let userType = ''

// userAge === 18 || alert('Ye Dataye Fake')

let userToken = userType || 'user'

console.log(userToken);


// true || true => true
// true || false => true
// false || true => true
// false || false => false

// true && true => true
// true && false => false
// false && true => false
// false && false => false