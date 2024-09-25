var cities = {
    tehran: ['Tehran', 'Shahryar', 'rudehen', 'bumehen'],
    shiraz: ['shiraz', 'fars', 'jamshid', 'shiraz pars'],
    mashhad: ['Mashhad', 'Fariman', 'Guchan'],
    tabriz: ['Tabriz', 'Marand', 'Jolfa', 'Ahar'],
}

var startProvine = prompt('Etnet The Provine: ')

var mainProvinceCities = cities[startProvine]
console.log(typeof mainProvinceCities);

mainProvinceCities.forEach(function (city) {
    console.log(city)
});