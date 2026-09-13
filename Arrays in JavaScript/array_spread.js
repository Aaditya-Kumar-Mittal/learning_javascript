function give4Values(a, b, c, d) {
    console.log("First value: " + a);
    console.log("Second value: " + b);
    console.log("Third value: " + c);
    console.log("Fourth value: " + d);
}

const fruits = ["Apple", "Banana", "Cherry", "Date"];

// Using the spread operator to pass array elements as individual arguments
give4Values(...fruits);

const vegetables = ["Carrot", "Broccoli", "Spinach", "Peas"];

give4Values(...vegetables);

// Using the spread operator to combine arrays
const combinedArray = [...fruits, ...vegetables];

console.log("Combined Array: ", combinedArray);

const people = ["Alice", "Bob", "Charlie"];

// Using the spread operator to add elements to an array
const newPeople = ["David", ...people, "Eve" , "Frank", ...combinedArray];

console.log("New People Array: ", newPeople);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const clone = [...arr1, ...arr2];

console.log("Cloned Array: ", clone);