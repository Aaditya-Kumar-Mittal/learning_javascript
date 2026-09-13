let firstName = "Aaditya";
let lastName = "Mittal";
// console.log(fullName);

//1. CONCATENATION
// let fullName = firstName + " " + lastName
let fullName = firstName.concat(lastName);

console.log(fullName);


//2. APPEND
// firstName += " something else"

//3. LENGTH
console.log(firstName.length);

//4. CASES
console.log(firstName.toUpperCase()); // It does not create a new string.
console.log(firstName.toLowerCase()); // It does not create a new string.
console.log(firstName);


//5. SLICE
console.log(fullName.slice(0, 3)); // from index 0 to index 3 (not including 3)

//6. SPLIT & JOIN
console.log(fullName.split("").join("-"));

//7. INCLUDES
console.log(fullName.includes("Aaditya")); // true

//8. TRIM
console.log(fullName.trim());