const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="components/site-user/site-user.css">
    <slot name="job"></slot>
    <slot name="username"></slot>
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