// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//         data.forEach((post, index) => {
//             console.log(`Post-${index + 1}: ${post}`);
//         })
//     })


// Async Await Way

async function getPosts() {

    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await res.json()

        posts.forEach((post, index) => {
            console.log(`Post-${index + 1}: ${post}`);
        })
    } catch (err) {
        console.log("یه خطایی وجود داره انگار:", err);
        alert('لطفا یبار دیگه کد رو چک بکن')
    }
}

getPosts()