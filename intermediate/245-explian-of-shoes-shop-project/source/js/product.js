// ✌ :))
let $ = document
let productsArray = [
   { id: 1, title: 'Sport Shoe', price: 53, img: 'images/1.png' },
   { id: 2, title: 'Women Shoe', price: 81, img: 'images/2.png' },
   { id: 3, title: 'Boots', price: 34, img: 'images/3.png' },
]
let productDetails = $.querySelector('.details')
let button = $.querySelector('button')

let locationSearch = location.search
let locationSearchParams = new URLSearchParams(locationSearch)
let locationId = locationSearchParams.get('id')
// locationId = locationId.slice(1,2)

let product = productsArray.find( (product) => {
   return +locationId === product.id
})
if (!product) {
   // history.back()
   location.href = 'http://127.0.0.1:5500/intermediate/245-explian-of-shoes-shop-project/source/index.html'
}
productDetails.insertAdjacentHTML('beforeend', `<div class="desc"><h1>${product.title}</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atnobis, ipsum quas excepturi sed minus modi officia corrupti, veniamrem tempora, tenetur dicta nesciunt neque! Voluptate consequunturincidunt molestias?</p></div><div class="image"><img src="${product.img}" /></div>`)

button.addEventListener('click', () => {
   location.href = 'http://127.0.0.1:5500/intermediate/245-explian-of-shoes-shop-project/source/index.html'
})