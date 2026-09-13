function person(name, age, occupation, city) {
    return {
        name: name,
        age: age,
        occupation: occupation,
        city: city,
        introduction: function () {
            console.log(`Hi, my name is ${this.name}. I am ${this.age} years old and I work as a ${this.occupation}. I live in ${this.city}.`);
        }
    };
}

const person1 = person("John", 30, "Engineer", "New York");

person1.introduction();

const person2 = person("Jane", 25, "Designer", "Los Angeles");

person2.introduction();

const a = 10;
const b = 20;

const obj = { a, b };

console.log(obj)

var lib =
{
    sum: (a, b) => a + b,
    sub: (a, b) => a - b,
    mul: (a, b) => a * b,
    div: (a, b) => a / b
}

console.log(lib.sub(10,20));
console.log(lib.sum(10,20));
console.log(lib.mul(10,20));
console.log(lib.div(10,20));