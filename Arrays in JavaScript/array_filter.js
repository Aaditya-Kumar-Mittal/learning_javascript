let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

console.log(array);

const evenNums = array.filter((value, index) => {
  if (value % 2 == 0) {
    return value;
  }
});

console.log(evenNums);
