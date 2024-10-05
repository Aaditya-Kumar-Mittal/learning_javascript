const promise1 = new Promise((resolve, reject) => {

  let success = true;

  if (success) {
    resolve("Promise resolveed successfully!");
  }
  else {
    reject("Some Technical Error!");
  }

  // resolve("Promise resolved")
  // reject("Some Technical Error")

});

//Using the reject handler
/*
promise1.then(
  (parameter) => {
    console.log(parameter);
  },
  (error) => {
    console.log(error);
  }
);
*/

//Using Catch Block

promise1.then(
  (parameter) => {
    console.log(parameter);
  }
).catch(
  (e) => {
    console.log(e);

  }
)

