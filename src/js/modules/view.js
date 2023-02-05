class Calculator {
    #actions;
    #buttons;
    #root;
    #display;
    #actionsRef;
    #defaultButtons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ',', '='];

    constructor(actions, root) {
        this.#actions = actions;
        this.#root = root;
    }

    #getButton(text) {
        const btn = document.createElement('button');
        btn.classList.add('button');
        btn.innerText = text;

        return btn;
    }
    #getDisplay(text) {
        const display = document.createElement('div');
        display.classList.add('display');
        display.innerText = text;

        return display;
    }

    #getCalculator() {
        const calculator = document.createElement('div');
        calculator.classList.add('calculator');
        const calculatorDisplay = document.createElement('div');
        calculatorDisplay.classList.add('calculator__display');

        const display = this.#getDisplay('0');
        this.#display = display;
        calculatorDisplay.appendChild(display);
        calculator.appendChild(calculatorDisplay);

        const calculatorActions = document.createElement('div');
        this.#actionsRef = calculatorActions;
        calculatorActions.classList.add('calculator__actions');
        const defaultBtns = this.#defaultButtons.map(btn => this.#getButton(btn));
        const numbers = document.createElement('div');
        numbers.classList.add('calculator__buttons');
        numbers.append(...defaultBtns);

        const actionEls = this.#actions.map(btn => this.#getButton(btn));
        const actions = document.createElement('div');
        actions.classList.add('calculator__buttons');
        actions.append(...actionEls);

        calculatorActions.append(numbers, actions);
        calculator.appendChild(calculatorActions);

        return calculator;
    }

    render() {
        const calculator = this.#getCalculator();
        this.#root.replaceChildren(calculator);
    }
    setDisplay(value) {
        this.#display.innerText = value;
    }
    getActionsRef() {
        return this.#actionsRef;

    }
}
export default Calculator;