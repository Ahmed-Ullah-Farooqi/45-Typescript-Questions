"use strict";
let nul = null;
console.log(nul === null); //predicted the result is true bcz the condition did meet
let und;
console.log(und === undefined); //predicted the result is true bcz the condition did meet
let number = 7;
console.log(number === 7); //predicted the result is true bcz the condition did meet
let condition = true;
console.log(condition === true); //predicted the result is true bcz the condition did meet
let not = "Italy";
console.log(not !== "Germany"); //predicted the result is true bcz the condition did meet
let a = 10;
let b = 5;
console.log(a < b); //predicted the result is false bcz the condition did not meet
let adult = false;
let license = true;
console.log(adult && license); //predicted the result is false bcz the condition did not meet
let num = "5";
let no = 20;
console.log(num < "10" || no < 10); //predicted the result is false bcz the condition did not meet
let x = "Ahmed";
let y = "Ahmed";
console.log(x !== y); //predicted the result is false bcz the condition did not meet
let c = 50;
console.log(c <= 20); //predicted the result is false bcz the condition did not meet
