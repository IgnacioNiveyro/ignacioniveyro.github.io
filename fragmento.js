class MiComponente123 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
        <p>Star Trek 👺(no la vi pero el profe dice eso)👺</p>
        `;
    }
}

customElements.define("nacho", MiComponente123);