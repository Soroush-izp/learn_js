const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="components/site-user/site-user.css">
    <h2>Mohammad Amin Saeedi Rad ❤</h2>
    <hr />
`

class SiteUser extends HTMLElement {
    constructor () {
        super()

        console.log('المنت کاستوم ساخته شد', this);

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
}

// Shadow DOM

export { SiteUser }