const student = {
    name: "John Doe",
    age: 20,
    course: "Computer Science"
};

const { name, age, course } = student;

console.log(name);
console.log(age);
console.log(course);

const {a, b, ...rest} ={a: 1, b: 2, c: 3, d: 4, e: 5};
// console.log(a);
// console.log(b);
console.log(rest)

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};

const {personName, personAge, address: {street, city, state}} = {personName: person.firstName + " " + person.lastName, personAge: person.age, address: person.address};
console.log(personName);
console.log(personAge);
console.log(street);
console.log(city);
console.log(state);