class Hello extends HTMLElement {
	constructor() {
        super();
        const shadow = this.attachShadow({mode: 'open'});
        const name = this.getAttribute("name");
        const p = document.createElement("p");
        p.textContent = `Hello, ${name ? name : "world"}!`;
        shadow.appendChild(p);
    }
}

customElements.define("hello-name", Hello);
