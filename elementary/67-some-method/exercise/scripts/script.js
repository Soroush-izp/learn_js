var products = [
    {id: 1, product: "laptop", price: 300000}, 
    {id: 2, product: "mobile", price: 200000}, 
    {id: 3, product: "chair", price: 150000}, 
    {id: 4, product: "bed", price: 250000}, 
    {id: 5, product: "carpet", price: 260000}, 
    {id: 6, product: "speaker", price: 280000}, 
], 
shopeList = [
    {id: 1, product: "bicycle", price: 230000}, 
    {id: 2, product: "television", price: 330000}, 
    {id: 3, product: "fan", price: 130000}, 
], 
sum = 0;

var userWant = prompt("What You Want : ");
var state = products.some(item => {
    if (userWant == item.product) {
        item.id = shopeList.length + 1;
        shopeList.push(item);
        console.log("We have your product");
        console.log(shopeList);
    }
    return userWant == item.product;
})
if (state == false) {
    console.log("End of inventory");
}

if (state) {
    shopeList.forEach(item => {
        sum += item.price;
        return 
    })
    console.log(`price : ${sum}`);
}
