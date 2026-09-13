let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(array);

const resultArr = array.map((value) => { return value * 2; });

console.log(`The new array after doubling is ${resultArr}.`);

console.log(`The original array is ${array}.`);

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => number * number);

console.log(`The squared numbers are: ${squaredNumbers}.`);

const peoples   = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Smith" },
    { firstName: "Michael", lastName: "Johnson" }
];

const fullNames = peoples.map((person) => `${person.firstName} ${person.lastName}`);

console.log(`The full names are: ${fullNames}.`);

const random = [1, 2, 3, 4, 5];

const multipliedByTen = random.map((number) => number * 10);

console.log(multipliedByTen)