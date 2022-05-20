 // ALL data can be TRUTHY or FALSEY
 
 'use strict'

// FALSEY 
 // FALSE
 // 0
 // `` '' ""
 // undefined
 //null
 //NaN - not a Number

 // ERVYTHING ELSE IS TRUTHY


 let a = 654852135;

 if (a == 0) {
     console.log('a is equal to Zero')
 } else if (a == 1) {
     console.log(' a is equal to ONE');
 } else {
     console.log('a is equal to something else');
 }



 // SHORTER |WAY TO CHECK TRUTH AND FALSE
 x == 2 ? console.log(true) : console.log(false);

 //EQUALTITY AND TYPE 

 1 == '1' ? console.log(true) : console.log(false);


 // STRIUCTLY EQUAL OPERATOR

  1 === '1'