let $ = document
let hour = $.querySelector('#hour')
let minute = $.querySelector('#minute')
let seconds = $.querySelector('#seconds')

setInterval( () => {
   if ((new Date ().getHours ()) > 9) {
      hour.innerHTML = new Date ().getHours ()
   } else {
      hour.innerHTML = '0' + new Date ().getHours ();
   }
   
   if ((new Date ().getMinutes ()) > 9) {
      minute.innerHTML = new Date ().getMinutes () 
   } else {
      minute.innerHTML = '0' + new Date ().getMinutes ();
   }

   (new Date ().getSeconds ()) > 9? seconds.innerHTML = new Date ().getSeconds (): seconds.innerHTML = '0' + new Date ().getSeconds ()
   
}, 1000)