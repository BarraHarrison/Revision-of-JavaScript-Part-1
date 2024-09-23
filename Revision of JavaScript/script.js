// String Data Types


// Double and Single Quotes
let firstName = "Elon";
let lastName = 'Musk';

// Number Data Types

let num = 96.0;
console.log(num);

let q = 10;
console.log(typeof q);

// Boolean Data Types

let learning = true;
let completed = false;

console.log(completed);

let b = 20<10;
console.log(b);
console.log(typeof b);

// Undefined Data Type

let years;
console.log(years);
console.log(typeof years);

// Null

let number = null;
console.log(number);
console.log(typeof number);
console.log(null == undefined);

// Object

let person = {
    firstWord : 'Barra',
    lastWord : 'Harrison',
    yearsOld : 26
};
console.log(person);
console.log(typeof person);

// Array

let numbers = [1,2,3,4,5];
console.log(numbers);
console.log(typeof numbers);

// Function

function message(){
    console.log("Hello Everyone");
}
console.log(typeof message);

let m;
console.log(typeof m);
console.log(m);

m = "This is a string";
console.log(typeof m);
console.log(m);

m = true;
console.log(typeof m);
console.log(m);

// Operators in JavaScript

// Operands are values and variables

// Addition

let sum = 5 + 3;
console.log(sum);

// Subtraction, Division and Multiply

let p = 10 * 3;
console.log(p);

let r = 2 ** 4; //2x2x2x2
console.log(r);


let f = 5;
f **= 3;
console.log(f);

// Increment and Decrement Operators

let e = 10;

console.log(e++);
console.log(e);

// Comparison Operators

let z = 10;
let y = '10';

console.log(z === y);

// AND Operands both conditions must be true

// OR Operands one condition must be true for it to be true

// Logical NOT (!) Operator

let Yes = true;
let No = false;

console.log(!Yes);
console.log(!No);

// JavaScript string Operator

console.log("hello " + "world");

let h = "JavaScript";

h += ' tutorial';

console.log(h);

// Conditional Statements which if, else and else if statements.


let age = 14;

if(age > 18){
    console.log("You are an adult.");
}
else if(age >= 16){
    console.log("You are a teenager.");
}
else{
    console.log("You are a minor.");
}

// Switch Statements

let dayName = 7;

switch (dayName) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;


    default:
        dayName = "Invalid day number";
        break;
}
console.log("The day is " + dayName);

// Ternary Operator

let no = 17;

let msg = (no >= 18) ? "You are an adult" : "You are a child";

console.log(msg);