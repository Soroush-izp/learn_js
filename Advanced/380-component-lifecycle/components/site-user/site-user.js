const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="components/site-user/site-user.css">
    <slot name="username"></slot>
    <slot name="job"></slot>
    <button>Remove</button>
    <hr />
`

class SiteUser extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

    connectedCallback () {
        // Codes - Event Handling

        console.log("کامپوننت به دام ملحق شد");

        let removeBtn = this.shadowRoot.querySelector('button')
        removeBtn.addEventListener('click', () => {
            this.userRemove(this)
        })
    }

    userRemove (el) {
        el.remove()
    }

    disconnectedCallback () {
        // Remove Handlers
        console.log('کامپوننت از دام ریمو شد');
        let removeBtn = this.shadowRoot.querySelector('button')
        removeBtn.removeEventListener('click', this.userRemove)

    }

}

// Shadow DOM

export { SiteUser }