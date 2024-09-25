// window.addEventListener('load', () => {
//     fetch('https://jsonplaceholder.typicode.com/posts') // Get
//         .then(res => res.json())
//         .then(data => {
//             data.forEach(post => console.log(post))
//         })
// })


//////////////////////////////////////////////////////////////////

let url = 'https://jsonplaceholder.typicode.com/posts/'

let postID = prompt('Enter The PostID That you want: ')

fetch(`${url}${postID}/comments`)
    .then(res => res.json())
    .then(mainPost => console.log(mainPost))