import { Calculator } from "./modules/calculator.js";

const calculator = new Calculator();
console.log(calculator.setSign('1'));
console.log(calculator.setSign('5'));
console.log(calculator.setSign('0'));
console.log(calculator.setSign('+'));
console.log(calculator.setSign('10'));
console.log(calculator.calculate());