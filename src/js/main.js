//TASK 1
const prom1 = Promise.resolve(1);
const prom2 = Promise.resolve(2);

function all(array) {
    return Promise.all(array);
}
all([prom1, prom2]).then(([a, b]) => {
    console.log(a, b);   
});

//TASK 2

