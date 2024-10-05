const arr = []

const fetchData = (arr = []) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      arr.push({ name: "Aaditya" });

      if (arr.length > 0) {
        resolve("Data Pushed to the Array.");
      }
      else {
        reject("Some Techincal Error!");
      }


    }, 2000);

  });
}

fetchData(arr).then(
  (parameter) => {
    console.log(parameter);
    console.log(arr);

  }
).catch((error) => {
  console.log(error);
});