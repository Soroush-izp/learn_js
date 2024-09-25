// const template = document.createElement('template')
// template.innerHTML = `
//     <link rel="stylesheet" href="css/site-user.css">
//     <h2>Mohammad Amin Saeedi Rad ❤</h2>
//     <hr />
// `

// class SiteUser extends HTMLElement {
//     constructor () {
//         super()

//         console.log('المنت کاستوم ساخته شد', this);

//         this.attachShadow({mode: 'open'})
//         this.shadowRoot.appendChild(template.content.cloneNode(true))

//     }
// }

// // Shadow DOM

// window.customElements.define('site-user', SiteUser)

const temp = document.createElement('template')
temp.innerHTML = `
    <h1>Test Component1</h1>
`
class siteUser extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(temp.content.cloneNode(true))
    }
}

window.customElements.define('site-user', siteUser)