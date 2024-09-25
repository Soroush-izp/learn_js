const $ = document;
const prev = $.querySelector(".prev");
const next = $.querySelector(".next");
let sliderItem = $.querySelector(".slider-item");
let imgSlider = $.querySelector(".img-slider");
let sliderLists = [
  'image/1.jpg', 
  'image/2.png', 
  'image/3.jpg'
]
let index = 0;

function prevItem() {
    index--
    if (index < 0) {
        index = sliderLists.length - 1
    }
    imgSlider.setAttribute('src', sliderLists[index])
}
function nextItem() {
  index++;
  if (index > sliderLists.length - 1) {
    index = 0;
  }
  imgSlider.setAttribute('src', sliderLists[index])

}

setInterval(nextItem , 4000)
prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);
