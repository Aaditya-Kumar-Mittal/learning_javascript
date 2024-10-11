console.log(typeof 7);
console.log(typeof 8.9);
console.log(typeof -6566);
console.log(typeof 5 - 6); //NaN

//Template Strings
console.log(`Aaditya Kumar Mittal \' \" `);

console.log(typeof '100')
console.log(typeof +'100'); //Justing add + in front of numerical string changes its type to number
console.log(typeof -'100'); //Justing add + in front of numerical string changes its type to number
console.log(typeof +'Aaditya'); //in web consoler returns NaN  a number but not a valid one

// console.log(typeof *'100'); //Error

console.log(typeof NaN);

console.log(parseInt('100dfada')); //Converts any string containing integer to a number
console.log(parseInt('Aaditya')); //A number but not a valid one NaN

console.log(100 + ''); //Adding empty string to a number changes it to a string -> concatenation

console.log(typeof false);
console.log(typeof true);
console.log(typeof +false);
console.log(typeof +true);
console.log(+false);
console.log(+true);

console.log(typeof undefined);
console.log(typeof null); //similar to undefined but is not automatically assigned to variables like undefined

var firstname = 'Aaditya';
let lastname = 'Mittal';
let age = 20;
const birthYear = 2006;
console.log(birthYear);
