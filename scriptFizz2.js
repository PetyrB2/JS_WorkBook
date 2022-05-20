'use strict'

// FOR LOOP

function appendTextToElement() {

}
for (var i=1; i < 101; i++){
    if (i % 15 == 0) {
      $('#fizzbuzz').html("FizzBuzz");
    }
    else if (i % 3 == 0) {
      $('#fizzbuzz').html("Fizz");
    }
    else if (i % 5 == 0) {
      $('#fizzbuzz').html("Buzz");
    }
    else console.log(i);
}