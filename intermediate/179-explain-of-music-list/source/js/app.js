let $ = document
let faPlay = $.querySelectorAll('.fa-play')
let audio = $.querySelectorAll('audio')

faPlay.forEach( (event) => {
   event.addEventListener('click', () => {
      audio.forEach( (item) => {
         if (item.dataset.name == event.dataset.name) {
            // item.currentTime = 0
            item.play()
         } else {
            item.pause()
         }
      })
   })
})
