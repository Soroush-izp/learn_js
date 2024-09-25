const template = document.createElement('template')
template.innerHTML = `
    <link rel="stylesheet" href="components/Course/course.css">
    <div class="course-card">
      <div class="cover">
        <img src="" />
      </div>

      <div class="details">
        <h2></h2>
        <div class="info">
          <p>Students: <slot name="students"></slot></p>
          <p>Teacher: <slot name="teacher"></slot></p>
        </div>

        <div class="actions">
          <button id="register">Register</button>
          <button id="toggle">Show Details</button>
        </div>
      </div>
    </div>
`

class Course extends HTMLElement {
    constructor () {
        super()

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true))

    }

    registerInfo () {
      alert(`You Register Course : ${this.getAttribute('title')}`)
    }

    toggleInfo () {
      if (this.shadowRoot.querySelector('.info').style.display == 'none') {
        this.shadowRoot.querySelector('.info').style.display = 'block';
        this.shadowRoot.querySelector('#toggle').innerHTML = 'Hide Details'
      } else {
        this.shadowRoot.querySelector('.info').style.display = 'none'
        this.shadowRoot.querySelector('#toggle').innerHTML = 'Show Details'
      }
    }

    connectedCallback () {
      this.shadowRoot.querySelector('.details h2').innerHTML = this.getAttribute('title')

      this.shadowRoot.querySelector('img').setAttribute('src', this.getAttribute('cover'))

      this.shadowRoot.querySelector('#register').addEventListener('click', () => {
        this.registerInfo();
      })
      this.shadowRoot.querySelector('#toggle').addEventListener('click', () => {
        this.toggleInfo();
      })
    }

    static observedAttributes () {
        return ["title", "cover"]
    }
}

export { Course }