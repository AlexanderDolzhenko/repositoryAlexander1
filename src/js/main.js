//TASK 1
function all(array) {
    array = [];
    const prom1 = new Promise((resolve, reject) => {
        let a = 1;
        resolve (a);
    });
    const prom2 = new Promise((resolve, reject) => {
       let b = 2;
        resolve (b);
    });    
}
all([prom1, prom2]).then(([a, b]) => {
    console.log(a, b);   
});
