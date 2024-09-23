let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

console.log(array);

let isAllEven = array.some((value, index) => { return value % 2 == 0; }); //some returns a boolen value, checks if the condition is valid even for oe value

console.log(isAllEven);
