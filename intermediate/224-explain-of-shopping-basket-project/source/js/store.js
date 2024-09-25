let allProducts = [
   { id: 1, title: "Album 1", price: 10, img: "Images/Album 1.png" },
   { id: 2, title: "Album 2", price: 20, img: "Images/Album 2.png" },
   { id: 3, title: "Album 3", price: 33, img: "Images/Album 3.png" },
   { id: 4, title: "Album 4", price: 41.98, img: "Images/Album 4.png" },
   { id: 5, title: "Coffee", price: 98, img: "Images/Cofee.png" },
   { id: 6, title: "Shirt", price: 65.33, img: "Images/Shirt.png" },
];
let $ = document;
let shopItemsContainer = $.querySelector(".shop-items");
let cartItemsContainer = $.querySelector(".cart-items");
let cartTotalPrice = $.querySelector(".cart-total-price");
let btnPurchase = $.querySelector(".btn-purchase");
let shopItemsFragment = $.createDocumentFragment()

allProducts.forEach((item) => {
   // let shopItemCon = $.createElement("div");
   // shopItemCon.classList = "shop-item";
   // let shopItemTitle = $.createElement("span");
   // shopItemTitle.classList = "shop-item-title";
   // shopItemTitle.innerHTML = item.title;
   // let shopItemBanner = $.createElement("img");
   // shopItemBanner.classList = "shop-item-image";
   // shopItemBanner.setAttribute("src", item.img);
   // let shopItemDetails = $.createElement("div");
   // shopItemDetails.classList = "shop-item-details";
   // let shopItemPrice = $.createElement("span");
   // shopItemPrice.classList = "shop-item-price";
   // shopItemPrice.innerHTML = "$" + item.price;
   // let shopItemButton = $.createElement("button");
   // shopItemButton.classList = "btn btn-primary shop-item-button";
   // shopItemButton.setAttribute("type", "button");
   // shopItemButton.innerHTML = "ADD TO CART";
   // shopItemDetails.append(shopItemPrice, shopItemButton);
   // shopItemCon.append(shopItemTitle, shopItemBanner, shopItemDetails);
   
   let shopItemCon = $.createElement("div");
   shopItemCon.classList = "shop-item";
   shopItemCon.insertAdjacentHTML('beforeend', `<span class="shop-item-title">${item.title}</span><img class="shop-item-image" src="${item.img}" /><div class="shop-item-details"><span class="shop-item-price">${"$" + item.price}</span><button class="btn btn-primary shop-item-button" type="button">ADD TO CART</button></div>`)
   shopItemsFragment.append(shopItemCon)
});
shopItemsContainer.appendChild(shopItemsFragment);

function addCartItem(product) {
   // let cartRowContainer = $.createElement("div");
   // cartRowContainer.classList = "cart-row";
   // cartRowContainer.id = product.id;
   // let cartRowItem = $.createElement("div");
   // cartRowItem.classList = "cart-item cart-column";
   // let cartRowBanner = $.createElement("img");
   // cartRowBanner.classList = "cart-item-image";
   // cartRowBanner.setAttribute("src", product.img);
   // cartRowBanner.setAttribute("width", "100");
   // cartRowBanner.setAttribute("height", "100");
   // let cartRowTitle = $.createElement("span");
   // cartRowTitle.classList = "cart-item-title";
   // cartRowTitle.innerHTML = product.title;
   // cartRowItem.append(cartRowBanner, cartRowTitle);
   // let cartRowPrice = $.createElement("span");
   // cartRowPrice.classList = "cart-price cart-column";
   // cartRowPrice.innerHTML = "$" + product.price;
   // let cartRowQuantity = $.createElement("div");
   // cartRowQuantity.classList = "cart-quantity cart-column";
   // let cartRowInput = $.createElement("input");
   // cartRowInput.classList = "cart-quantity-input";
   // cartRowInput.setAttribute("type", "number");
   // cartRowInput.setAttribute("value", "1");
   // let cartRowButton = $.createElement("button");
   // cartRowButton.classList = "btn btn-danger";
   // cartRowButton.innerHTML = "REMOVE";
   // cartRowButton.setAttribute("type", "button");
   // cartRowQuantity.append(cartRowInput, cartRowButton);
   // cartRowContainer.append(cartRowItem, cartRowPrice, cartRowQuantity);
   // cartItemsContainer.append(cartRowContainer);

   cartItemsContainer.insertAdjacentHTML('beforeend', `<div id="${+ product.id}" class="cart-row"><div class="cart-item cart-column"><img class="cart-item-image" src="${product.img}" width="100" height="100"><span class="cart-item-title">${product.title}</span></div><span class="cart-price cart-column">${"$" + product.price}</span><div class="cart-quantity cart-column"><input class="cart-quantity-input" type="number" value="1"><button class="btn btn-danger" type="button">REMOVE</button></div></div>`)
}
function totalPrice() {
   let sum = 0;
   let cartPrice = $.querySelectorAll(".cart-price");
   let cartQuantityInput = $.querySelectorAll(".cart-quantity-input");
   cartPrice.forEach((item, index) => {
      if (index != 0) {
         sum += +item.innerHTML.slice(1) * cartQuantityInput[index - 1].value;
      }
      cartTotalPrice.innerHTML = "$" + sum;
   });
}
function cartQuantityInputUpdate() {
   let cartQuantityInput = $.querySelectorAll(".cart-quantity-input");
   cartQuantityInput.forEach((item) => {
      item.addEventListener("change", () => {
         totalPrice();
      });
   });
}
function removeProductFromShopeLists() {
   let removeBtn = $.querySelectorAll(".btn-danger");
   removeBtn.forEach((item) => {
      item.addEventListener("click", (event) => {
         event.target.parentNode.parentNode.remove();
         totalPrice();
      });
   });
}
let shopItemButton = $.querySelectorAll(".shop-item-button");
shopItemButton.forEach((item, index) => {
   item.addEventListener("click", () => {
      let selectedProduct = allProducts[index];

      let cartRow = $.querySelectorAll('.cart-row')
      let isProductAvailable = true;
      cartRow.forEach( (item) => {
         if (item.getAttribute('id') == selectedProduct.id) {
            isProductAvailable =  false;
         }
      })
      if (isProductAvailable) {
         addCartItem(selectedProduct);
         totalPrice();
         cartQuantityInputUpdate();
         removeProductFromShopeLists();
      }
   });
});
btnPurchase.addEventListener('click', () => {
   cartItemsContainer.innerHTML = ''
   cartTotalPrice.innerHTML = '$' + 0
})
