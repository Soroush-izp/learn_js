var usersData = [
    {id: 1, username: 'amin', password: '01010101', email: 'amin@gmail.com'},
    {id: 2, username: 'ali', password: 'ali9021', email: 'ali@gmail.com'},
    {id: 3, username: 'amir', password: 'amir56', email: 'amir@gmail.com'},
    {id: 4, username: 'babak', password: 'babak2000', email: 'babak@gmail.com'},
    {id: 5, username: 'hasan', password: 'hasan_r', email: 'hasan@gmail.com'},
    {id: 6, username: 'reza', password: 'reza.xyz', email: 'reza@gmail.com'},
]

var username = prompt('Enter Your UserName: ')

var mainUserData = usersData.find(function (user) {
    return user.username === username
})

if (mainUserData === undefined) {
    alert('شما در سایت ثبت نام نکردید')
} else {
    alert("Your Password: " + mainUserData.password)
}