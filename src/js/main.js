import View from "./modules/view.js";
import { Calculator } from "./modules/calculator.js";
import Controller from "./modules/controller.js";

const buttons = ['+', '-', '*', '/'];
const root = document.querySelector('.root');
const view = new View(buttons, root);
const calculator = new Calculator();

const controller = new Controller(calculator, view);

controller.initialize();


// OOP CLASS TASK

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
    get info() {
        return `${this.#vin} ${this.#color}`;
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

    set loadcapacity(loadcapacity) {
        if (typeof loadcapacity !== 'number') {
            throw new Error('loadcapacity should be a number');
        }
        this.#loadcapacity = loadcapacity;
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

    set sitsCapacity(sitsCapacity) {
        if (typeof sitsCapacity !== 'number') {
            throw new Error('sitsCapacity should be a number');
        }
        this.#sitsCapacity = sitsCapacity;
    }

}
class Dealer {
    #veichles = [];
    #title;

    constructor(title, veicles) {
        this.#title = title;
        this.#veichles = veicles;
        this.#veichles.forEach((veicles) => {
            for (let i = 0; i < this.#veichles.length; i++) {
                if (this.#veichles[i] instanceof Bus || this.#veichles[i] instanceof Truck) {
                    this.#veichles[i] = veicles;
                }
                else {
                    throw new Error('should be a massive');
                }
            }
        })
    };

    addVeichle(veicles) {

        const autoVin = this.#veichles.find((item) => item.vin === veicles.vin);
        if (!autoVin) {
            this.#veichles.push(veicles);
        }
        else {
            throw new Error('should be a unique vin');
        }
    };

    sellVeichle(veicles) {
        if (veicles) {
            this.#veichles.splice(veicles, 1);
        }
    };


    repaintVeichle(vin, color, type) {
        const veiclesByType = this.#veichles.filter((veicles) =>
            type === 'bus' ?
                veicles instanceof Bus :
                veicles instanceof Truck
        );
        const veicles = veiclesByType.find((item) => item.vin === vin);

        if (veicles) {
            veicles.color = color;
        }
    };

    get title() {
        return this.#title;
    }
    set title(title) {
        if (typeof title !== 'string') {
            throw new Error('title should be a string');
        }
        this.#title = title;
    }
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
const truck = [new Truck(
    DATABASE.trucks[0].vin,
    DATABASE.trucks[0].color,
    DATABASE.trucks[0].loadCapacity),
new Truck(
    DATABASE.trucks[1].vin,
    DATABASE.trucks[1].color,
    DATABASE.trucks[1].loadCapacity),
new Truck(
    DATABASE.trucks[2].vin,
    DATABASE.trucks[2].color,
    DATABASE.trucks[2].loadCapacity
)];

const bus = [new Bus(
    DATABASE.buses[0].vin,
    DATABASE.buses[0].color,
    DATABASE.buses[0].sitsCapacity),
new Bus(
    DATABASE.buses[1].vin,
    DATABASE.buses[1].color,
    DATABASE.buses[1].sitsCapacity)];

const dealer = new Dealer(DATABASE.dealer.title, [...truck, ...bus]);

const bus2 = new Bus(7733, 'Light Green', 50);
dealer.addVeichle(bus2);
const truckSold = new Truck(1112, 'Red', 10);
dealer.sellVeichle(truckSold);

dealer.repaintVeichle(6543, 'EXTRABLUE', 'bus');


console.log(dealer);
