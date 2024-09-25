const listItems = [
   { id: 1, name: "Amin", family: "Saeedi Rad" },
   { id: 2, name: "Amir", family: "Zehtab" },
   { id: 3, name: "Qadir", family: "Yolme" },
   { id: 4, name: "Babak", family: "Mohammadi" },
   { id: 5, name: "Hasan", family: "Ghahreman Zadeh" },

   { id: 6, name: "Amin", family: "Saeedi Rad" },
   { id: 7, name: "Amir", family: "Zehtab" },
   { id: 8, name: "Qadir", family: "Yolme" },
   { id: 9, name: "Babak", family: "Mohammadi" },
   { id: 10, name: "Hasan", family: "Ghahreman Zadeh" },

   { id: 11, name: "Saeed", family: "Ehsani" },
   { id: 12, name: "Siamak", family: "Modiri" },
   { id: 13, name: "Mohsen", family: "Ansari" },
   { id: 14, name: "Mehran", family: "Ali Pour" },
   { id: 15, name: "Amir Hossein", family: "Mahtabi" },

   { id: 16, name: "Hossein", family: "Amino" },
   { id: 17, name: "Melika", family: "Ehsani" },
   { id: 18, name: "Qadir", family: "Yolme" },
   { id: 19, name: "Fatemeh", family: "Alilou" },
   { id: 20, name: "Ehsan", family: "Tayyebi" },

   { id: 21, name: "Zahra", family: "Gholami" },
   { id: 22, name: "Matin", family: "Sahebi" },
];
let $ = document;
let listElem = $.querySelector("#list");
let paginationElem = $.querySelector("#pagination");
let pageCounter = 0;
let listsLength = listItems.length;
let currentPage = 1;
let rows = 5;

function addGenItems(items, wrapper, rowsPage, page) {
   wrapper.innerHTML = "";
   let end = rowsPage * page;
   let start = end - rowsPage;

   let paginatedItems = items.slice(start, end);

   paginatedItems.forEach((item) => {
      let itemWrapper = $.createElement("div");
      itemWrapper.classList = "item";
      itemWrapper.innerHTML = item.name + " " + item.family;
      wrapper.append(itemWrapper);
   });
}
function pageCounting(listsLength) {
   pageCounter = 0;
   while (listsLength > 0) {
      pageCounter++;
      listsLength -= rows;
   }
}
function addPageNum(maxPage) {
   let pageCount = 0;
   for (let i = 1; i <= maxPage; i++) {
      pageCount++;
      let buttonElem = $.createElement("button");
      buttonElem.innerHTML = pageCount;
      paginationElem.append(buttonElem);
   }
   pageNumClick();
}
function pageNumClick() {
   let paginationItems = paginationElem.childNodes;
   paginationItems.forEach((item) => {
      item.addEventListener("click", (event) => {
         let removeActive = $.querySelector("button.active");
         removeActive.classList.remove("active");
         event.target.classList.add("active");
         currentPage = event.target.innerHTML;
         addGenItems(listItems, listElem, rows, currentPage);
      });
   });
}
window.addEventListener("load", () => {
   addGenItems(listItems, listElem, rows, currentPage);
   pageCounting(listsLength);
   addPageNum(pageCounter);
   paginationElem.childNodes[currentPage].classList.add("active");
});
