const inputElem = document.querySelector('input')

let apiData = {
    url: 'https://api.openweathermap.org/data/2.5/weather?q=',
    key: '26c4d8ad14b57209671494df9bd9fcb9'
}

function fetchData () {
    let countryValue = inputElem.value

    fetch(`${apiData.url}${countryValue}&&appid=${apiData.key}`).
        then(res => res.json())
        .then(data => {
            console.log(data);
        })
}

inputElem.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        fetchData()
    }
})



// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];