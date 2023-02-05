import View from "./modules/view.js";
import {Calculator} from "./modules/calculator.js";
import Controller from "./modules/controller.js";

const buttons = ['+', '-', '*', '/'];
const root = document.querySelector('.root');
const view = new View(buttons, root);
const calculator = new Calculator();

const controller = new Controller(calculator, view);

controller.initialize();