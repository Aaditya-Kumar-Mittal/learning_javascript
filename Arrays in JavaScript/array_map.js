let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(array);

const resultArr = array.map((value) => { return value * 2; });

console.log(`The new array after doubling is ${resultArr}.`);

console.log(`The original array is ${array}.`);
