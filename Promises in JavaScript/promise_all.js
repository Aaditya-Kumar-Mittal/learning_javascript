const promise1 = Promise.resolve("Promise 1 resolved");
const promise2 = Promise.resolve("Promise 2 resolved");

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results); // Logs: ["Promise 1 resolved", "Promise 2 resolved"]
  })
  .catch((error) => {
    console.error(error); // If any promise fails
  });