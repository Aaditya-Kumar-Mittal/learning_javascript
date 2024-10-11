const message = 'Hello World!'
console.log(message);

console.log(message.length);


const faltuMessage = '     Hi, I am Aaditya Mittal.     '
console.log(faltuMessage);

const finalMessage = faltuMessage.trim()
console.log(finalMessage);

const stringArr = finalMessage.split(" ")
console.log(stringArr);


const finalMessageLowerCase = faltuMessage.trim().toLocaleLowerCase()
console.log(finalMessageLowerCase);


const replacedMessage = finalMessage.replace('Hi', 'Hello')
console.log(replacedMessage);

const lastFourDigits = '9996'
const maskedAccountNumber = lastFourDigits.padStart(16, '*')
console.log(maskedAccountNumber);

const firstFourDigits = '1234';
const masked = firstFourDigits.padEnd(16, '#');
console.log(masked);

const capitalMessage = message.toUpperCase()
console.log(capitalMessage);

const bankBalance = 9873
const concatenatedString = `Last four digit of my account number is`.concat(' ', lastFourDigits)
console.log(concatenatedString);


const templateString = `My account number is ${lastFourDigits}.`
console.log(templateString);

const templateString2 = `I have ₹${bankBalance} in my account.`
console.log(templateString2);

const addedString = 'I have ₹' + bankBalance + ' in my account.'
console.log(addedString);

