//TASK 1
const prom1 = Promise.resolve(1);
const prom2 = Promise.resolve(2);

function all(array) {
    return new Promise((resolve, reject) => {
        const results = [];
        let count = 0;
        array.forEach((element, i) => {
            element.then((result) => {
                results[i] = result;
                count++;
                if (count === array.length) {
                    resolve(results);
                }
            }).catch((e) => reject(e));

        });
    });
}

all([prom1, prom2]).then(([a, b]) => {
    console.log(a, b);
})

//TASK 2
const prom3 = Promise.resolve(3);
const prom4 = Promise.resolve(4);

function allSecond(arrayTwo) {
    return Promise.all(arrayTwo).then(function (sum) {
        return sum[0] + sum[1];
    });
}
allSecond([prom3, prom4]).then((sum) => {
    console.log(sum);
});

// TASK 3


function debounce(fn, delay) {
    let timer;
    return function (...args) {
        //console.log(args);
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)

    }
}
const result = debounce(console.log, 1000);
result(1);
result(2);

setTimeout(() => result(3), 100);
setTimeout(() => result(4), 500);
setTimeout(() => result(5), 1600);


// OOP + PROMISE

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
    };

    getVeichleByVin(vin, type) {
        return new Promise((res, rej) => {
            const veichlesByType = this.#veichles.filter(item => type === 'bus'
                ? item instanceof Bus
                : item instanceof Truck);
            const veichle = veichlesByType.find(item => item.vin === vin);

            if (veichle) {
                res(veichle)
            } else {
                rej(new Error(`${type} with vin: ${vin} isn't in dealer`))
            }
        });
    }

    addVeichle(veicles) {
        return new Promise((res, rej) => {
            const autoVin = this.#veichles.find((item) => item.vin === veicles.vin);
            if (!autoVin) {
                res(this.#veichles.push(veicles))
            }
            else {
                rej(new Error('should be a unique vin'));
            }
        })
    };

    sellVeichle(vin, type) {
        return new Promise((res) => {      
            const veiclesByType = this.#veichles.filter(veicles =>
                type === 'bus' ?
                    veicles instanceof Bus :
                    veicles instanceof Truck
            );
        const veicles = veiclesByType.filter(item => item.vin !== vin)
        
            if (veicles) {
                res(veicles);
            }
        })

    };

    repaintVeichle(vin, color, type) {
        return new Promise((res) => {
            const veiclesByType = this.#veichles.filter(veicles =>
                type === 'bus' ?
                    veicles instanceof Bus :
                    veicles instanceof Truck
            );
            const veicles = veiclesByType.find(item => item.vin === vin);

            if (veicles) {
                res(veicles.color = color);
            }
        })

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

};

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

const truckSold = new Truck(1112, 'Red', 10);

dealer.addVeichle(bus2)
    .then(dealer.getVeichleByVin(7733, 'bus'))
    .then(dealer.repaintVeichle(7733, 'EXTRABLUE', 'bus'))
    .then(dealer.sellVeichle(7733, 'bus'))
    .catch(e => console.log(e));

console.log(dealer);
