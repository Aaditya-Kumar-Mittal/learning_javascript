const greet = function(){
    console.log(`Hello! My name is ${person.name}. I am ${person.age} years old.`);
}

const person = {
    name: "Aaditya",
    age: 20,
    greet: greet
}

person.greet();