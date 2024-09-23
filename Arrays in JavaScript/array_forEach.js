let array = [1, 2, 3, 4, 5, 6];

console.log(array);

array.forEach((value, index) => {
  console.log(value);
})

let totalSum = 0;

array.forEach((value, index) => {
  totalSum += value;
});

console.log(totalSum);
