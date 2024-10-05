

function sum(a, b, callBack) {

  const result = a + b;

  //This is a callback function
  callBack(result);
}

function displayResult(result) {
  const h1 = document.querySelector("h1");

  h1.innerText = result;
}

//Sum is a Higehr order function since it receives a callback function as an argument 
sum(10, 15, displayResult)
sum(10, 30, alert)