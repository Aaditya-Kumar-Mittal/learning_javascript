const richColors = ["#FF5733", "#33FF57", "#3357FF", "#F1C40F", "#8E44AD"];

richColors.forEach((color, index) => {
    console.log(`Color at index ${index + 1}: ${color}`);
});

const words = ["Hello", "World", "JavaScript", "is", "awesome!"];

const capitalizedWords = [];

words.forEach((word) => {
    capitalizedWords.push(word[0].toUpperCase() + word.substring(1));
});

console.log(capitalizedWords);

const numbers = [1, 2, 3, 4, 5];

var sumNumbers = 0;

function adder(number) {
    sumNumbers += number;
}

numbers.forEach((adder));

console.log(`The sum of the numbers is: ${sumNumbers}`);