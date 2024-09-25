var users = [
    {id: 1, name: 'John', age: 19}, 
    {id: 2, name: 'lily', age: 20}, 
    {id: 2, name: 'linda', age: 25}, 
], 
isAccessible = users.every(item => {
    return item.age > 18;
});
if (isAccessible) {
    console.log("Your group can conference call");
} else if (!isAccessible) {
    console.log("Your group can't conference call");
}