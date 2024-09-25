const setCookieBtn = document.querySelector('button')
const getCookieBtn = document.querySelector('#get-cookie')

setCookieBtn.addEventListener('click', () => {
    console.log(document.cookie); // show all cookies

    const now = new Date()

    console.log(now);
    
    let expireDay = now.setTime(now.getTime() + 2 * 24 * 60 * 60 * 1000)

    console.log(now);
    

    document.cookie = `userage=22;path=/;expires=${now}`
})

getCookieBtn.addEventListener('click', () => {

    let mainCookieName = prompt('Enter the cookie main:')

    let cookiesArray = document.cookie.split(';')

    let mainCookie = null

    cookiesArray.some(cookie => {
        if (cookie.includes(mainCookieName)) {
            mainCookie = cookie.substring(cookie.indexOf('=') + 1)
            return true
        }
    })

    console.log(mainCookie);

})