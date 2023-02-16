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
const prom3 = Promise.resolve(3);
const prom4 = Promise.resolve(4);

function allSecond(arrayTwo) {
    
    return Promise.all(arrayTwo).then(function(sum) {
        
        return sum[0] + sum[1];
    });
       
}
allSecond([prom3, prom4]).then((sum) => {
    console.log(sum);   
});