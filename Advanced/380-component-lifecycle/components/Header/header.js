const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="components/Header/header.css">
    <div class="header">
        <h2>This Is Site Header :))</h2>
    </div>
    <hr />
`

class Header extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }
}

// Shadow DOM

export { Header }