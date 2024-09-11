class ProductList extends HTMLElement {
    constructor() {
        super();
    }

    async connectedCallback() {
        this.innerHTML = `
            <div style="display: flex">
                <div>Product 1</div>
                <div>Product 2</div>
                <div>Product 3</div
            </div>
        `;
    }
}
 
customElements.define('product-list', ProductList);