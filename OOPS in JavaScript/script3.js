//Constructor Function
function Star(weight, height) {
  this.weight = weight;
  this.height = height;
}

const RomanReigns = new Star(285, 185);

console.log(RomanReigns.constructor);
console.log(RomanReigns);

//new keyword ka use karke banaya hain toh constructor use kara hain

//direct object return karaya with factory functions toh return kiya ki native code hain

const a = new Object({ a: 25, b: 260 })

console.log(a);
console.log(a.constructor);
