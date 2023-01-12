import {ACTIONS, VALID_SYMBOLS} from "./constants.js";
export class Calculator {
    #firstNumber = '';
    #secondNumber = '';
    #action = '';

    setSign(symbol) {
        const symbolStr = String(symbol);

        if(!VALID_SYMBOLS.test(symbolStr)) {
            return this.#getCurrentString();
        }
        if (ACTIONS.test(symbol) && !this.#secondNumber) {
            this.#action = symbol;
            return this.#getCurrentString();
        }
        if (!ACTIONS.test(symbol) && !this.#action) {
            this.#firstNumber += symbol;
            return this.#getCurrentString();
        } 
        if (!ACTIONS.test(symbol) && this.#action) {
            this.#secondNumber += symbol;
            return this.#getCurrentString();
        } 
    }
    #getCurrentString() {
        return `${this.#firstNumber} ${this.#action} ${this.#secondNumber}`
    }
}