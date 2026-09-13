// The rest parameter syntax allows us to represent an indefinite number of arguments as an array. It is used in function definitions to gather the remaining arguments into a single array parameter.

function sum(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7));


function printUserData(...userData)
{
    console.log(`User Data: Name: ${userData[0].name} ${userData[0].lastName}, Age: ${userData[0].age}, City: ${userData[0].city}`);
}

printUserData({name : "John", lastName: "Doe", age: 30, city: "New York"});

function multiply(multiplier, ...numbers) {
    return numbers.map(number => number * multiplier);
}

console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
console.log(multiply(10, 1, 2, 3)); // Output: [2, 4, 6]
console.log(multiply(100, 1, 2, 3)); // Output: [2, 4, 6]

