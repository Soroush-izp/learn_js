let loadExternalFile = cdn => {
   return new Promise((resolve, reject) => {
      const linkTag = document.createElement('link');
      linkTag.rel = 'stylesheet';
      linkTag.href = cdn;
      linkTag.onload = () => resolve("file Loaded Successfully :))")
      linkTag.onerror = () => reject(new Error("File Not Loaded :(("));
      document.head.append(linkTag)
   });
}

// console.log(loadExternalFile());

// console.log(loadExternalFile('styles/style.css'));
// console.log(loadExternalFile('styles/style.js'));

loadExternalFile('styles/style.css')
   .then(response => {
      console.log(response);
      document.body.insertAdjacentHTML('afterbegin', `<h1 class='message'>Css External ${response}</h1>`);
   })
   .catch(err => {
      console.log(err);
      document.body.insertAdjacentHTML('afterbegin', `<h1>${err}</h1>`);
   })