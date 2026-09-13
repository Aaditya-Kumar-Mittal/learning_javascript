let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(array);

let prev = array.reduce((previousValue, value, index) => { return previousValue; }); //returns starting value

console.log(prev);

let totalSum = array.reduce((previousValue, value, index) => { return previousValue + value; });

console.log(totalSum);


function reduceView(previousValue, currentValue) {
    // previousValue is the value returned from the last call of the callback function, or the initial value if supplied. By default, the initial value is the first element of the array.
    console.log(`Previous Value : ${previousValue}`);
    console.log(`Current Value : ${currentValue}`);
    return previousValue + currentValue;
}

const sum = array.reduce(reduceView);

console.log(`The sum of the array is : ${sum}`);

const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Doe", age: 35 },
];

const totalAge = people.reduce((previousValue, person) => {
    return previousValue + person.age;
}, 0); // 0 is the initial value for previousValue

console.log(`The total age of all people is: ${totalAge}`);

const fruits = ["apple", "banana", "cherry", "date", "elderberry","banana", "cherry", "date", "elderberry", "apple", "banana", "cherry", "date", "elderberry", "apple", "banana", "cherry", "date", "elderberry", "apple", "banana", "cherry", "date", "apple", "banana", "cherry", "date", "apple", "banana", "cherry", "date", "apple", "banana", "cherry", "date", "apple", "banana", "cherry", "date", "elderberry", "apple", "banana", "cherry", "date", "apple", "banana", "apple", "banana", "apple", "banana"];

const fruitFrequency = fruits.reduce((previousValue, fruit) => {
    if (previousValue[fruit]) {
        previousValue[fruit]++;
    } else {
        previousValue[fruit] = 1;
    }
    return previousValue;
}, {}); // {} is the initial value for previousValue

console.log(`The frequency of each fruit is: ${JSON.stringify(fruitFrequency)}`);

function calculateProducts(array) {
    return array.reduce((previousValue, value) => {
        return previousValue * value;
    }, 1);
}

const numProducts = calculateProducts([1, 2, 3, 4, 5]);

console.log(`The product of all numbers in the array is: ${numProducts}`);