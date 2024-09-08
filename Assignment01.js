//Q1. Explain the role of operators in JavaScript. Why are they essential in programming?
/**
 * Operatores are essential part of every programming language not only in JS but in every programming lamguage like java,python,cpp etc etc...
 * operatores allow us to do so many logical and mathmatical things if we require anywhere in our code 
 * some basic operators in js are as follows :
 * +,-,/,*,%,++,--
 */


//Q2. Describe the categorization of operators in JavaScript based on their functionality. Provide examples for
// each category.
/**
 * there are logical operators , arithemtaic,assignment,compariosn,bitwise,urinary operators
 */


//Q5. Write a JavaScript program that calculates the simple interest using the formula Simple interest =
// (principal * rate * time) / 100.
const principal = 10000;
const rate =  2;     // in percentage
const time = 1;    ///in years

let SI  = (principal*rate*time)/100;
console.log(SI);


//Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/
//height * height.

const weight =  80;  // in kg
const height =  5.6; // in feet
let BMI = weight/( height * height) ;
console.log(BMI);


//Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate
//arithmetic operators.
const r =  10 //in cm
console.log( 2 * 3.14 * r);