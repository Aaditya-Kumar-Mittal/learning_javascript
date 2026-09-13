const data = {
    user: {
        id: 123,
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com",
        address: {
            city: "New York",
            country: "USA",
        },
        hobbies: ["Reading", "Painting", "Cooking"],
        scores: {
            math: 95,
            science: 88,
            history: 75,
        },
    },
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 800 },
        { id: 3, name: "Tablet", price: 500 },
    ],
    settings: {
        darkMode: true,
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
        language: "English",
    },
};

const {user : {name, age, email, address : {city, country}, hobbies, scores: {math, science, history}}, products : productList, settings} = data;

console.log(name); // John Doe
console.log(age);
console.log(email);
console.log(city);
console.log(country);
console.log(hobbies);
console.log(math);
console.log(science);
console.log(history);
console.log(productList);
console.log(settings);