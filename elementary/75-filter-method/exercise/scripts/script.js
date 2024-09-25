var shopeList = [
   { id: 1, name: "laptop", price: 200000 },
   { id: 2, name: "phone", price: 200000 },
   { id: 3, name: "milk", price: 200000 },
   { id: 4, name: "pen", price: 90000 },
   { id: 5, name: "pencil", price: 10000 },
   { id: 6, name: "cable", price: 80000 },
];
var postPrice = 0, 
productPrice = 0;

var filteredProduct = shopeList.filter(item => {
   return item.price < 100000;
})
postPrice = filteredProduct.length * 1000;

shopeList.forEach(item => {
   productPrice += item['price'];
})
console.log(shopeList);
console.log(`ProductPrice: ${productPrice}`);
console.log(`PostPrice: ${postPrice}`);
console.log(`Total cost: ${productPrice + postPrice}`);