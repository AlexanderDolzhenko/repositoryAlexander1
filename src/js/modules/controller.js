class Controller {
    #calculator;
    #view;

    constructor(calculator, view) {
        this.#calculator = calculator;
        this.#view = view;
    }

    initialize() {
        this.#view.render();
        const actionWrapper = this.#view.getActionsRef();        
        actionWrapper.addEventListener('click', this.#handleClick.bind(this));
    }

    #handleClick(e) {
        const {target: {innerText}} = e;
        let displayString = '';        
        if (innerText !== '=') {
            this.#calculator.setSign(innerText);
            displayString = this.#calculator.getCurrentString();
        } else {
            displayString = this.#calculator.calculate();
        }
       this.#view.setDisplay(displayString);
    }
}
export default Controller;