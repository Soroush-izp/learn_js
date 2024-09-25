let $ = document, 
cityDates = {
   tehran: {temp: '51', des: 'Cloudy', humidity: '60%', wind: 6.0}, 
   amol: {temp: '52', des: 'Cloudy', humidity: '62%', wind: 6.2}, 
   shiraz: {temp: '53', des: 'Cloudy', humidity: '63%', wind: 6.3}, 
   mashhad: {temp: '54', des: 'Cloudy', humidity: '64%', wind: 6.4}
}

function search () {
   (() => {
      let backgroundImageSrc = [
      'url(images/Jowhareh_galleries_3_poster_28c5dc30-527b-499f-8d82-a2037ff3a673.jpeg)', 
      'url(images/Jowhareh_galleries_3_poster_2c338751-7dd8-4ce7-a7cd-009c50b70423.jpeg)', 
      'url(images/Jowhareh_galleries_3_poster_c7e8f8f4-5afe-4255-9465-ef186772b8e6.jpeg)', 
      'url(images/Jowhareh_galleries_3_poster_cd3ff86b-7edf-4531-9737-7f9eadf2b225.jpeg)'
      ]
      let index = Math.floor(Math.random() * 4)
      document.body.style.backgroundImage = backgroundImageSrc[index]
   })()

   let searchBar = $.getElementsByClassName('search-bar')[0], 
   city = $.getElementsByClassName('city')[0], 
   temp = $.getElementsByClassName('temp')[0], 
   description = $.getElementsByClassName('description')[0], 
   humidity = $.getElementsByClassName('humidity')[0], 
   wind = $.getElementsByClassName('wind')[0], 
   loading = $.getElementsByClassName('loading')[0], 
   card = $.getElementsByClassName('card')[0], 
   cityError = $.getElementsByClassName('city-error')[0]

   if (!(cityDates[searchBar.value] == undefined)) {
      city.innerHTML = 'Weather in ' + searchBar.value
      temp.innerHTML = cityDates[searchBar.value]['temp'] + '°C'
      description.innerHTML = cityDates[searchBar.value]['des']
      humidity.innerHTML = 'Humidity: ' + cityDates[searchBar.value]['humidity']
      wind.innerHTML = 'Wind speed: ' + cityDates[searchBar.value]['wind'] + ' km/h'
      loading.style.visibility = 'visible'
      card.style.height = '100%'
      cityError.style.visibility= 'hidden';
      searchBar.style.borderBottom= 'unset';
      $.documentElement.style.setProperty('--loading-after', 'hidden');
   } else {
      loading.style.visibility = 'hidden'
      card.style.height = 'unset'
      cityError.style.visibility= 'visible';
      searchBar.style.borderBottom= '1px solid red';
      $.documentElement.style.setProperty('--loading-after', 'visible')
   }
}