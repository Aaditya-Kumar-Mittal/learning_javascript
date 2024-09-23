let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

console.log(array);

const findFunc = (value, index) => {
  if (value === 13) {
    console.log("13 Exists.");
  }
}

// Automatically runs a while loop on the given function
array.find(findFunc);

array.find((value, index) => {
  if (value === 12) {
    console.log("12 Exists.");
  }
});

//To print all even elements using find function

array.find((value, index) => {
  if (value % 2 == 0) {
    console.log(value);

  }
})