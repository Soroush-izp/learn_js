var Storage = [
   {id: 1, userName: 'John', password: 'password'}, 
   {id: 2, userName: 'joy', password: 'jaoy'}, 
   {id: 3, userName: 'jain', password: 'juainy'}, 
]
var userName = prompt("Enter your username to find your password :"), 
password;
password = Storage.find(item => {
   return item.userName === userName;
})

if (password == undefined) {
   console.log("your username didn't exist!");
} else {
   console.log(`password is : ${password.password}`);
}