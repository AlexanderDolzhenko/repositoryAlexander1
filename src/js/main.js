import View from "./modules/view.js";
import {Calculator} from "./modules/calculator.js";
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
constructor(loadCapacity) {
    this.#loadcapacity = loadCapacity;
}
get loadcapacity() {
    return this.#loadcapacity;
}
set loadcapacity(loadcapacity) {
    if (typeof loadcapacity !== 'number') {
        throw new Error('loadcapacity should be a number');
    }
    this.#loadcapacity = loadcapacity;
}
}
class Bus extends Veichle {
#sitsCapacity;
constructor(sitsCapacity) {
    this.#sitsCapacity = sitsCapacity;
}
get sitsCapacity() {
    return this.#sitsCapacity;
}
set sitsCapacity(sitsCapacity) {
    if (typeof sitsCapacity !== 'number') {
        throw new Error('sitsCapacity should be a number');
    }
    this.#sitsCapacity = sitsCapacity;
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
get veichles() {
    return this.#veicles;
}
set veichles(veichles) {
    if (typeof veichles !== Veichle) {
        throw new Error('veichles should be a massive');
    }
    this.#veicles = veichles;
}
addVeichle(veichle){};
sellVeichle(vin){};
repaintVeichle(vin){};

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
        sitsCapacity : 50,
      },
      {
        vin: 6543,
        color: "Yellow",
        sitsCapacity : 25,
      },
    ],
  };
 