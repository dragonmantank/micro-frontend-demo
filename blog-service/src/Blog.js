class Blog extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.innerHTML = `
            <ul>
                <li>Blog Post 1</li>
                <li>Blog Post 2</li>
                <li>Blog Post 3</li>
            </ul>
        `;
    }
}
 
customElements.define('blog-post', Blog);