const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    fetch('https://randomuser.me/api/', {
        method: 'GET'
    }) // Get
        .then(res => {
            if (res.status === 200) {
                return res.json()
            }
            return new Error('Error :/')
        })
        .then(data => {
            console.log("Data:", data.results[0]);
        })
        .catch(err => {
            console.log(err);
        })
})