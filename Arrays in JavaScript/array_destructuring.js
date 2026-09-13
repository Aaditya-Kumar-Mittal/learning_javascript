const foo = [1, 2, 3, 4, 5];
const [a, b, c, d, e] = foo;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

const [one, two, three, four, five, six] = foo;
console.log(one)
console.log(six) // undefined because there is no sixth element in the array

const [a1, ...a2] = foo;
console.log(a1) // 1
console.log(a2) // [2, 3, 4, 5]

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'black', 'white'];

const [color1, color2, color3, ...otherColors] = colors;
console.log(color1);
console.log(color2);
console.log(color3);