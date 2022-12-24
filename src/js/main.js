"use strict";

function averageСost(arr) { // ЗАДАЧА 1*
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
 }
 
 console.log(averageСost([50, 100, 60]));



 function Cylinder(r, h) { // ЗАДАЧА 2
    this.cyl_r = r;
    this.cyl_h = h;
  }
  Cylinder.prototype.volume = function () {
    return this.cyl_h * Math.PI * Math.pow(this.cyl_r, 2);
  };
  Cylinder.prototype.area = function () {
    return 2 * Math.PI * this.cyl_r * (this.cyl_h + this.cyl_r);
  };
  let cyl = new Cylinder(2, 1) 
  console.log("volume:", cyl.volume().toFixed(2) + ", " + "area:", cyl.area().toFixed(2));
 
  function odd() { 
    for (let i = 1; i < 8; i += 1) {
        if (i % 2 !== 0) {
          console.log(i);
        }
      }
    }
  console.log(odd(2,7));
