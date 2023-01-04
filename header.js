const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<style>
    .header{
        width: 200px;
        height: 200px;
        text-align: center;
        background-color: red;
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
    }
    h1{
        color: blue;
    }
</style>

<div >
    <div class="header">
        <div> Header - My First Blog on Web Component </div>
    </div>
    <div class="header">
    <div> Header - My First Blog on Web Component </div>
</div>
</div>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);