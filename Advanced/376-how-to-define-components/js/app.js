// Custom Element - المنت های سفارش سازی شده
// Component

// DRY => Don't Repeat Yourself
// function () {}

// let pElem = document.querySelector('p')


class SiteUser extends HTMLElement {
    constructor () {
        super()

        console.log('المنت کاستوم ساخته شد', this);

        this.innerHTML = `
        <style>
            h2 {
                color: blue;
            }
        </style>
        
        <h2>Mohammad Amin Saeedi Rad</h2>
        <hr />`


    }
}

// Shadow DOM

window.customElements.define('site-user', SiteUser)