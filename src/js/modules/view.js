class Calculator {
    #buttons;
    #root;

    constructor(buttons, root) {
        this.buttons = buttons;
        this.root = root;

    }
    #getButton(text) {
        const btn = document.createElement('button');
        btn.classList.add('button');
        btn.innerText = text;

        return btn;
    }
    #getDisplay(text) {
        const display = document.createElement()
    }
}