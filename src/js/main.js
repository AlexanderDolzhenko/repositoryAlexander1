//TASK 1
const prom1 = Promise.resolve(1);
const prom2 = Promise.resolve(2);

function all(array) {
    return new Promise((resolve) => {
        const results = [];
        let count = 0;
        array.forEach((element, i) => {
            element.then((result) => {
                results[i] = result;
                count++;
                if (count === array.length) {
                    resolve(results);
                }
            })

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
