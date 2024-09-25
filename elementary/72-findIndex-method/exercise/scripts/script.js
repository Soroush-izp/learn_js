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
flag = false;

var state = confirm("confirm if you want delete product from shop list,\ncancel if you want add product to shop list"), 
product = prompt("Enter The Name Of Product: ")

switch (state) {
   case true:
      var isDelete = shopeList.findIndex(item => {
         if (item.product === product) {
            flag = true;
            console.log("We find the product !!!");
            return item.product === product;
         }
      }) 
      if (flag) {
         shopeList.splice(isDelete, 1);
         console.log("Product successfully deleted from shop list !!!");
      } else if (!flag) {
         console.log("We can't find the product !!!");
      }
      console.log(shopeList);
      break;
   case false:
      products.some(item => {
      if (item.product === product) {
         flag = true;
         console.log("We find your product :)");
         shopeList.push(item);
         shopeList[shopeList.length - 1]['id'] = shopeList.length;
         console.log("your product save in shope list :)");
      }
      })
      if (!flag) {
         console.log("We can't find the product !!!");
      }
      console.log(shopeList);
      break;
}