// let browserInfo = window.navigator.userAgent
// console.log(browserInfo);
// let browserName = browserInfo.match(/edg|firefox|opera|chrome|safari/i)

// // console.log(browserName[0]);
// if (browserName[0]) {
//    // console.log(document.querySelector(`.${browserName[0].toLowerCase()}`));

//    // document.querySelector(`.${browserName[0].toLowerCase()}`).style.opacity = '1'
//    document.querySelector(`.${browserName[0].toLowerCase()}`).style.cssText = 'opacity: 1;'

// }

window.addEventListener('load', () => {
   let userAgent = window.navigator.userAgent;
   let userBrowser = null;

   if (userAgent.match(/edg/i)) {
      userBrowser = 'edg';
   } else if (userAgent.match(/firefox/i)) {
      userBrowser = 'firefox';
   } else if (userAgent.match(/opr/i)) {
      userBrowser = 'opera';
   } else if (userAgent.match(/chrome/i)) {
      userBrowser = 'chrome';
   } else if (userAgent.match(/safari/i)) {
      userBrowser = 'safari';
   } 

   let userBrowserImgElem = document.querySelector(`.${userBrowser}`)

   if (userBrowserImgElem) {
      userBrowserImgElem.style.opacity = '1'
   }
})
