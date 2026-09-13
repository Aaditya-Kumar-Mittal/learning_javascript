const date1 = new Date();
const date2 = Date();
// year, month, day, hours, minutes, seconds, milliseconds
const date3 = new Date(2012, 11, 12, 4, 5, 56);

console.log(date1);
console.log(date2);
console.log(date3);

console.log(date1.getDate());
console.log(date1.getFullYear());
console.log(date1.getDay());
console.log(date1.getMilliseconds());
console.log(date1.getMonth());
console.log(date1.getUTCFullYear());
console.log(date1.getTime());
console.log(date1.getTimezoneOffset());

console.log(date1.toDateString());
console.log(date1.toISOString());
console.log(date1.toLocaleDateString());
console.log(date1.toLocaleString());

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
console.log(today);
console.log(tomorrow);
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
console.log(yesterday);