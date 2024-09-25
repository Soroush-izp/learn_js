const setCookieBtn = document.querySelector('button')

setCookieBtn.addEventListener('click', () => {
    console.log(document.cookie); // show all cookies

    const now = new Date()

    console.log(now);
    
    now.setTime(now.getTime() + 2 * 24 * 60 * 60 * 1000)

    console.log(now);
    

    document.cookie = `username=amin-saeedi;path=/;expires=${now}`
})