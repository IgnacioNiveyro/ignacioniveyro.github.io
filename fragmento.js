class MiComponente123 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <p>BLABLABLABLABLA</p>
        `;
    }
}

customElements.define("team-123", MiComponente123);