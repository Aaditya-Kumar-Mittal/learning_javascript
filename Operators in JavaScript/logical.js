const result1 = "" || "Hello";
console.log(result1); // Output: "Hello"

const result2 = 0 || "Hello";
console.log(result2); // Output: "Hello"

const result3 = "Hello" || null;
console.log(result3); // Output: "Hello"

const result4 = "" && "Hello";
console.log(result4); // Output: ""

const result5 = 0 && "Hello";
console.log(result5); // Output: "0"

const result6 = "Hello" && null;
console.log(result6); // Output: "null"

const userAge = 25;
const isInRange = userAge >= 18 && userAge <= 24;
console.log(isInRange); // Output: false

const isCollegeStudent = userAge >= 18 && userAge <= 24;
const isSchoolStudent = userAge < 18;
const isStudent = isCollegeStudent || isSchoolStudent;
console.log(isStudent); // Output: true (if userAge is 22)

const result = (userAge >= 18) && (userAge <= 24);
console.log(result); // Output: true or false

const value1 = false && "Some Value";
console.log(value1); // Output: false

const value2 = true || "Another Value";
console.log(value2); // Output: true

console.log(Boolean(0)); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean("Hello")); // Output: true

const andResult5 = 'Hello' && console.log('hello1')
const orResult5 = undefined || console.log('hello2')  