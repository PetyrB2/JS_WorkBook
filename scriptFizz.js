'use strict'

// FOR LOOP

for (var i=1; i < 101; i++){
    if (i % 15 == 0) {
      $('#fizzbuzz').append(`<b><u>${i} is a FizzBuzz</u></b><br/>`);
    }
    else if (i % 3 == 0) {
      $('#fizzbuzz').append(`<b>${i} is a Fizz</b><br/>`);
    }
    else if (i % 5 == 0) {
      $('#fizzbuzz').append(`<b>${i}  is a Buzz</b><br/>`);
    }
    else  // We can comment out the text so as to only have Fizz Buzz on screen but thought it was a bit more fuhn
    { $('#fizzbuzz').append(`The number ${i}   is to be thrown in the bin! <br/>`);
        console.log(i);
    }
}