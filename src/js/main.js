"use strict";
// ЗАДАЧА 1*
function averageСost(arr) { 
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];}
    return sum / arr.length;
 }
 
 console.log(averageСost([50, 100]));

 // ЗАДАЧА 1-1
function avCost2() {
    let len = arguments.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        sum += +arguments[i];
    }
    return sum/len;
 }

console.log(avCost2(50, 100, 30));

// ЗАДАЧА 2
 function Cylinder(r, h) { 
    this.cyl_r = r;
    this.cyl_h = h;
  }
  Cylinder.prototype.volume = function () {
    return this.cyl_h * Math.PI * Math.pow(this.cyl_r, 2);  };
  Cylinder.prototype.area = function () {
    return 2 * Math.PI * this.cyl_r * (this.cyl_h + this.cyl_r);
  };
  let cyl = new Cylinder(2, 1) 
  console.log("volume:", cyl.volume().toFixed(2) + ", " + "area:", cyl.area().toFixed(2));
 
// ЗАДАЧА 2 - альтернатива
  function calculateVolumeAndArea(length) {
    let volume = 0;
   let area = 0;
   volume = length * length * length;
   area = 6 * (length * length);
   return `volume: ${volume}, area: ${area}`;
   }
console.log(calculateVolumeAndArea(5));




// ЗАДАЧА 3 
  function odd(start, finish){
  let result = "";
  for (let i = start; i <= finish; i++) {
    if (i % 2 !== 0) {
    result = result + (i) + " " ; {}}
   }
   return result;
}
const str = odd (2,7);
console.log(str);

//ЗАДАЧА 4
function reverseString(str) { 
return str.split("").reverse().join("");};
console.log(reverseString("abc")); 

// ЗАДАЧА 5
function palindromes(str) {
let arr = str.split(' ');
let result = '';
    for (let i = 0; i < arr.length; i++) {
    let pal = arr[i];
function reverse(pal) {
    return pal.split("").reverse().join("");}
const palReverse = reverse(pal);
    if(pal === palReverse && pal.length >= 2) {
    result = result + pal + " ";}
}
return result;
}
console.log(palindromes('madam was looking on the radar for a kayak'));



// ЗАДАЧА 6 
const forbidden = ['ship', 'blow', 'blew up'];
const str1 =  'There once was a ship that put to sea\nThe name of the ship was the Billy of Tea\nThe winds blew up, her bow dipped down\nOh blow, my bully boys, blow (huh)'
const symbol = '+';
function censorship (str1, forbidden, symbol) {
 const arr = str1;
 let result = '';
 for (let i = 0; i < arr.length; i++) {
    if (arr.includes(forbidden[0])
    && arr.includes(forbidden[1])
    && arr.includes(forbidden[2])) {
    result = arr.replace(new RegExp(forbidden[0], "g"), symbol.repeat(forbidden[0].length))
    .replace(new RegExp(forbidden[1], "g"), symbol.repeat(forbidden[1].length))
    .replace(new RegExp(forbidden[2], "g"), symbol.repeat(forbidden[2].length));}
}
return result
}
console.log(censorship(str1, forbidden, '+')) 

// ЗАДАЧА 7 
function urlParser(str) {
  let myObj = {
    protocol: '',
    domain: '',
    way: '' };
  let arr; 
  let arr1;
    arr = str.split("://");
    for (let i = 0; i < arr.length; i++) {
    myObj.protocol = arr[0];
    arr1 = arr[1].split("/"); 
    myObj.domain = arr1[0];}   
    arr1.shift();
    myObj.way = arr1.join("/");      
return myObj;
}
console.log(urlParser('http://www.devbg.org/forum/index.php'))

// ЗАДАЧА 7 АЛЬТЕРНАТИВА

function urlParser2(str1) {
    let match = str1.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)/);
    return match && {
        protocol: match[1],
        domain: match[2],       
        way: match[5],       
    }
}
console.log(urlParser2('http://www.devbg.org/forum/index.php'))


// ЗАДАЧА 7 АЛЬТЕРНАТИВА-2
const url1 = 'http://www.devbg.org/forum/index.php';

const regexp1 = /^(https?|ftp):\/\/([^/]+)\/([^/]+\/?)+/;

console.log(url1.match(regexp1));



// ЗАДАЧА 8
function backToFront(str, num){
let arr = str;
let result = '';
    if (arr == str) {
    result = arr.slice(-num) + arr + arr.slice(-num);
}
return result
}
console.log(backToFront('government', 3))

// ЗАДАЧА 9
function digitSum(num){
 let sum = 0, tmp;
 while (num) {
 tmp = num % 10;
 num = (num - tmp) / 10;
 sum += tmp;
 }
 return sum;
}
console.log(digitSum(9999))

// ЗАДАЧА 9 альтернатива
function digitSum2(num){
return num.toString().split('').reduce(function(a, b) {
return +a + +b;})
}
console.log(digitSum2(29)) 

// ЗАДАЧА 10
function socialRole (age) {
  let result = '';
  if (age >= 0 && age < 15) {
    result = "Ребенок";
  } else if (age >= 15 && age < 25) {
    result = "Юноша";
  } else if (age >=25 && age < 65) {
  result = "Взрослый";
  } else if (age >= 65) {
    result = "Пожилой";
  } return result
}
console.log(socialRole(70))
