let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(array);

let prev = array.reduce((previousValue, value, index) => { return previousValue; }); //returns starting value

console.log(prev);

let totalSum = array.reduce((previousValue, value, index) => { return previousValue + value; });

console.log(totalSum);
