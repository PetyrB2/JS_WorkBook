'use strict'

let text = 'This is a Message';

console.log('Hello World. WE are back !!!');



console.log(text); // Shows "This is a message"
console.info(text); // Shows "This is a message"
console.warn(text); // Yellow Triangle message in console
console.error(text); // Circular Red message in Console

// Formats the let text message for us ! So we can format the output to console.
console.log('%c' + text, 'color: black; background-color: white; font-size: 20px; padding:5px;');


// Create a Constant
const a = 'This is a Constant';
// Pump out the constant to console.log
console.log(a);

console.log('==== Key Value Pairs =======');
// Key value pairs
let myFirstObject = {
    key : 'value',
    name : 'My First Objectus Maxuimus',
    age : 42,
    awesome : true
}

console.log(myFirstObject);
console.log('==== CONCAT AND INTERPOL =======');
// Concatenation and Interpolation

let string = 4 * 500;
let result = 4 + 4;

console.log(string);
console.log(result);
console.log(string + result);

console.log('=====FOR LOOP 1 to <10 ======');
// FOR LOOP

for(let i = 0; i < 10; i++) {
    console.log(i)
}

// For Loop calaculated the SUM of 10 numbers from 1 to 10
console.log('===== FOR LOOP ======');
let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum);
console.log('==== WHILE LOOP =======');
// WHILE LOOP ---- Let Conditions etc
let condition = true;
let increment = 0;

while(condition) {
    console.log(increment);
    increment++;

    if(increment == 3) {
        condition = false;
    }
}


// DO WHILE LOOPS  If set to true it will go on for EVER !
console.log('==== DO WHILE LOOPS =======');

let notThis = false;
do {
    console.log('This is a Do-While Loop');
} while(notThis);


// SWITCH CASE LOOP used to replace large if else if else trees
// They only exit a loop on a break or default
console.log('==== SWITCH CASE LOOPS =======');
let num = 2;

switch(num) {
    case 0:
        console.log('The number ' + num + ' is equal to Zero');
        break;
        case 1:
            console.log('The number ' + num + ' is equal to One');
            break;
            case 2:
                console.log('The number ' + num + ' is equal to Two');
            break;
            break;
            default:
                console.log('ERROR TRY AGAIN !')
}


// OBSERVATION
console.log('= If WITH NO spaces between 1 speech marks =');
if ('') {
    console.log(true);
} else {
    console.log(false);
}

console.log('= If WITH spaces between the 1 speech marks =');
if (' ') {
    console.log(true);
} else {
    console.log(false);
}


// IF Hello Statement

console.log('--[ If String = hello ]--');
let str = "hello";

if ('str') {
    console.log(true);
} else {
    console.log(false);
}

// Change to If Else Else IF
console.log('--[ IF, ELSE IF, ELSE ]--');

let str2 = "Goodbye";


if (str2 == "Hello") {
    console.log('String is equal to Hello')
} else if (str2 == "goodbye") {
    console.log('String is equal to Goodbye');
} else {
    console.log('String is equal to something else');
}

// TERNARY IF STATEMENT
console.log('--[ TERNARY If Statement ]--');
let x = 1;
x == 1 ? console.log('X is 1') : console.log(' X is NOT 1');

// STRICTLY EQUAL OPERATOR
console.log('--[ Strictly EQUAL Operator ]--');
42 === '42';
console.log(true);
