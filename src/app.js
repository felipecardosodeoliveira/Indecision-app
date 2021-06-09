// import subtract, { square, add } from './utils';

// console.log('app.js is running now')

// console.log(square(2));
// console.log(add(100, 23));
// console.log(subtract(100, 81))

// person.js
// named export isAdult(18) - true if adult, otherwise false
// named export canDrink(21) - true if 21 and over, otherwise false

// import isAdult and canDrink
// use both printing result to the console

import isSenior, { isAdult, canDrink } from './playground/person';

console.log(isAdult(18));
console.log(canDrink(18));
console.log(isSenior(64));
console.log(isSenior(65));