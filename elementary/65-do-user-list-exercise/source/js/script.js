var usersArray = [
  {id: 1, name: 'amin', family: 'SaeediRad', age: 21},
  {id: 2, name: 'amir', family: 'Mohammadi', age: 19},
  {id: 3, name: 'Hasan', family: 'Ghorbani', age: 18},
]


usersArray.forEach(function (user) {
  console.log("Name: " + user.name + " Family: " + user.family)
})