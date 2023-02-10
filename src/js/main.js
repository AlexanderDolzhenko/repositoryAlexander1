import View from "./modules/view.js";
import { Calculator } from "./modules/calculator.js";
import Controller from "./modules/controller.js";

const buttons = ['+', '-', '*', '/'];
const root = document.querySelector('.root');
const view = new View(buttons, root);
const calculator = new Calculator();

const controller = new Controller(calculator, view);

controller.initialize();


// CLASS TASK

class Veichle {
    #vin;
    #color;
    constructor(vin, color) {
        this.#vin = vin;
        this.#color = color;
    }
    get vin() {
        return this.#vin;
    }
    set vin(vin) {
        if (typeof vin !== 'number') {
            throw new Error('Vin should be a number');
        }
        this.#vin = vin;
    }

    get color() {
        return this.#color;
    }
    set color(color) {
        if (typeof color !== 'string') {
            throw new Error('Color should be a string');
        }
        this.#color = color;
    }
}
class Truck extends Veichle {
    #loadcapacity;
    constructor(vin, color, loadCapacity) {
        super(vin, color);
        this.#loadcapacity = loadCapacity;
    }
    get loadcapacity() {
        return this.#loadcapacity;
    }
    get vin() {
        return super.vin;
    }
    get color() {
        return super.color;
    }
    set loadcapacity(loadcapacity) {
        if (typeof loadcapacity !== 'number') {
            throw new Error('loadcapacity should be a number');
        }
        this.#loadcapacity = loadcapacity;
    }
    set vin(vin) {
        super.vin = vin;
    }
    set color(color) {
        super.color = color;
    }
}
class Bus extends Veichle {
    #sitsCapacity;
    constructor(vin, color, sitsCapacity) {
        super(vin, color);
        this.#sitsCapacity = sitsCapacity;
    }
    get sitsCapacity() {
        return this.#sitsCapacity;
    }
    get vin() {
        return super.vin;
    }
    get color() {
        return super.color;
    }
    set sitsCapacity(sitsCapacity) {
        if (typeof sitsCapacity !== 'number') {
            throw new Error('sitsCapacity should be a number');
        }
        this.#sitsCapacity = sitsCapacity;
    }
    set vin(vin) {
        super.vin = vin;
    }
    set color(color) {
        super.color = color;
    }
}
class Dealer {
    #title;
    #veicles;
    constructor(title, veicles) {
        this.#title = title;
        this.#veicles = veicles;
    }
    get title() {
        return this.#title;
    }
    set title(title) {
        if (typeof title !== 'string') {
            throw new Error('title should be a string');
        }
        this.#title = title;
    }
    get veicles() {
        return this.#veicles;
    }
    set veicles(veicles) {
        if (typeof veicles !== []) {
            throw new Error('veicles should be a massive');
        }
        this.#veicles = veicles;
    }
    addVeichle() { };

    sellVeichle() { };
    repaintVeichle() { };

}

const DATABASE = {
    dealer: {
        title: "Trucks & Buses",
    },
    trucks: [
        {
            vin: 1112,
            color: "Red",
            loadCapacity: 10,
        },
        {
            vin: 2332,
            color: "Yellow",
            loadCapacity: 20,
        },
        {
            vin: 5234,
            color: "Green",
            loadCapacity: 70,
        },
    ],
    buses: [
        {
            vin: 1112,
            color: "Green",
            sitsCapacity: 50,
        },
        {
            vin: 6543,
            color: "Yellow",
            sitsCapacity: 25,
        },
    ],
};
const bus = new Bus(7733, 'Light Green', 50);
const truck = new Truck(1112);
const dealer = new Dealer();
dealer.addVeicle(truck);
dealer.addVeichle(bus);
