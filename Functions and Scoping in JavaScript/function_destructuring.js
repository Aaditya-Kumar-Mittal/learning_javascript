function printPersonInfo(person) {

    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`Address: ${person.address.street}, ${person.address.city}, ${person.address.state}`);
}

function printPersonInfo2({ name, age, address: { street, city, state } }) {

    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Address: ${street}, ${city}, ${state}`);
}

const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};

printPersonInfo(person);
printPersonInfo2(person);

const songs = [
  { name: "Lucky You", singer: "Joyner", duration: 4.34 },
  { name: "Just Like You", singer: "NF", duration: 3.23 },
  { name: "Humble", singer: "Kendrick Lamar", duration: 2.33 },
  { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
  { name: "Cold Shoulder", singer: "Central Cee", duration: 5.23 },
];

const [, , { name: songName, singer }] = songs;
const [, , { singer: s }] = songs;
console.log(s);
console.log(songName);

