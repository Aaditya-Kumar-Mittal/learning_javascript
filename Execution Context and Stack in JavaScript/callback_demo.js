const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calculateInArr(arr = [], callBack) {

  const ans = [];

  for (let index = 0; index < arr.length; index++) {

    const element = callBack(arr[index]);

    ans.push(element);

  }

  return ans;

}

function multiply10(a) {
  return a * 10;
}

function divide10(a) {
  return a / 10;
}

const arr1 = calculateInArr(arr, multiply10);

const arr2 = calculateInArr(arr, divide10);

console.log(arr1);

console.log(arr2);

