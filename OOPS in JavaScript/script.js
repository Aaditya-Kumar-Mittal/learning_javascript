const obj1 = {
  name: "ABC",
  age: 19
}

console.log(obj1);
console.log(obj1.name);
console.log(obj1.age);


// Number, string, boolean, null, undefined -> Primitive Data Types

//Objects can be dynamically change

obj1.added = "Dyanmic change in objects property.";

console.log(obj1);

//Primitve Data Types are pass by value and Reference Data Types are pass by reference

//Pass by value of Primitive data Types

let a = 10;

let b = a;

console.log(a);

console.log(b);

a = 20;

console.log(a);

console.log(b);

//Pass by value of Primitive data Types


let c = {
  name: "Aaditya",

  age: 19,
}

console.log(c);

c.name = "Aaditya Kumar"

console.log(c);

const obj2 = obj1;

//Object 2 is pointing to the same memory location as that of object 1

console.log(`This is object 1 before operations on object 2`);
console.log(obj1);

obj2.name = "ABCDEFG";

console.log(`This is object 1 after operations on object 2`);
console.log(obj1);

