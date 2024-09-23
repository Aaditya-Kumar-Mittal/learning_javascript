let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

console.log(array);

let isAllEven = array.every((value, index) => { return value % 2 == 0; }); //every returns a boolen value

console.log(isAllEven);
