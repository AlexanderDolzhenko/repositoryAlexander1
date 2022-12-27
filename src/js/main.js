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
 
// ЗАДАЧА 3 :(
  function odd(start, finish){
  for (let i = 2; i <= 7; i++)
   {
    if (i % 2 !== 0);
        {
      console.log(i);
    }
  }
}
//ЗАДАЧА 4
function reverseString(str) { 
return str.split("").reverse().join("");
};
console.log(reverseString("abc")); 
// ЗАДАЧА 5 :(
let arr = ['madam was looking on the radar for a kaya']
const palindrome = (arr) => {
  let count = 0
  for(let key of arr){
    if(key.length > 5 || key.length < 5){
      continue
    }
    if(parseInt(key).toString().length != key.length){
      continue
    }
    if(+key == +key.split('').reverse().join('')){
      count++
    }
  }
  return count
}
let rezult = palindrome(arr) 
console.log(rezult)
console.log(palindrome(arr)) 

