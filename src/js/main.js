"use strict";
// ЗАДАЧА 1*
function averageСost(arr) { 
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
 }
 
 console.log(averageСost([50, 100, 60]));


// ЗАДАЧА 2
 function Cylinder(r, h) { 
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
 
// ЗАДАЧА 3 
  function odd(start, finish){
  let result = "";
  for (let i = start; i <= finish; i++)
   {
    if (i % 2 !== 0) {
      result = result + " " + (i); {
      }
    }
   }
   return result;
}
const str = odd (2,7);
console.log(str);

//ЗАДАЧА 4
function reverseString(str) { 
return str.split("").reverse().join("");
};
console.log(reverseString("abc")); 

// ЗАДАЧА 5
function palindromes(str) {
let arr = str.split(' ');
let result = '';
for (let i = 0; i < arr.length; i++) {
let pal = arr[i];
function reverse(pal) {
return pal.split("").reverse().join("");
}
const palReverse = reverse(pal);
if(pal === palReverse)
if (pal.length >= 2) {
 result = result + pal + " "; 
}
}
return result;
}
console.log(palindromes('madam was looking on the radar for a kayak'));
