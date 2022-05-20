'use tsrict'

let d = 1;

const b = 2;

let cameLCase = "naming";


// PRIMITIVES

let aBoolean = true;
let aNumber = 4;
let aString = 'string';
let aBigInt = 9999999999999999n;
console.log(aBigInt);
let aSymbol = Symbol('description in here');
let SecondSymbol = Symbol('description in here');
let aNull = null;
let anUndefined;


// console.log(aNull);
// console.log(anUndefined);


//OBJECTS

let anObject = {
    key : 'value',
    anotherKey : 12345
}

console.log(anObject.anotherkey);

//STRING CONCATENATION

let string ='48 * 30 = ';
let result = 48 * 30;
console.log(string + result);

// STRING INTERPOLATION

// let string2 = '48 * 13' = ${48 * 13};
// console.log(string2);



// FOR LOOP runs whilst something is met.

for(let i = 0; i < 5; i++) {
    console.log('i = ${i}')
}


// WHILE LOOP

let condition = true;
let increment = 0;

while(condition) {
    console.log(increment);
    increment++;

    if(increment == 3) {
        condition = false;
    }
}

// DO WHILE LOOP

let a = false;
do {
    console.log('run forrest run');
} while(a);

// SWITCH CASES

let num = 11;


switch(num) {
    case 0:
        console.log('at zero');
        break;
        case 1:
            console.log('at one');
            break;
            case 5:
                console.log('at five');
            break;
            case 10:
                console.log('at ten');
            break;
            default:
                console.log('not sure whaat you are doing here!')
}


