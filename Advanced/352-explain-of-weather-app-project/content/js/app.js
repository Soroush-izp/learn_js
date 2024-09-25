    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const $ = document
const searchBox = $.querySelector('.search-box')
const main = $.querySelector('main')
const date = new Date()

searchBox.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchBox.value}&appid=2b20b7d8bb66b2b69785bd99f4faef78`)
        .then(res => res.json())
        .then(data => {
            console.log(data); 
            main.innerHTML = ''
            main.insertAdjacentHTML('beforeend', `
            <section class="location">
                <div class="city">${data.name}, ${data.sys.country}</div>
                <div class="date">${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}</div>
            </section>
            <div class="current">
                <div class="temp">${(data.main.temp - 273.15).toFixed(2)}<span>°c</span></div>
                <div class="weather">${data.weather[0].main}</div>
                <div class="hi-low">${Math.floor(data.main.temp_min - 273.15)}°c / ${Math.floor(data.main.temp_max - 273.15)}°c</div>
            </div>
            `)
        })

    }
})