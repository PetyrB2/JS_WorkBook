'use strict'

// OBJECTS, ARRAYS & JSON
let petCat = new Object();

petCat["name"] = "Puss";
petCat["type"] = "Cat";
petCat["size"] = "Small";

let petDog = new Object();

petDog["name"] = "Clifford";
petDog["type"] = "Dog";
petDog["size"] = "Big";

console.log("--Pet Cat--");
console.log(petCat);
console.log("--Pet Dog--");
console.log(petDog);
console.log("--Pet Types--");
console.log(petDog.type);
console.log(petCat.type);
console.log("--Pet Colour--");
petDog.colour = "Red";
petCat.colour = "Black";

console.log("-Both Cat & Dog-");
console.log(petDog, petCat);
console.log("-----------");

console.log("-Vehicle / Bike-");
let vehicle = {
    type : "bike",
    seats : 1,
    Wheels : 2
}

console.log(vehicle);
console.log(vehicle.type);

console.log("-Garage-");
let garage = [
    vehicle,
    {type : "Car", seats : 5, wheels : 4}
]

console.log(garage);

let x = ["a", "b", "c", "d","e"];

for (let i=0; i < x.length; i++) {
    console.log(x[i]);
}
    //HERE FOR SHORTHAND !!! NO |GOOD FOR SPECIFICS
    // for (let bob of x) {
    //     console.log(bob);
    // }
console.log(x.reverse());

console.log(x.join(", "));
