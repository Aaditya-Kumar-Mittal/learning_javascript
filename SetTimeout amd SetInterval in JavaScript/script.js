const btn = document.querySelector("button");

const printname = (name, income, gender) => {

  var gen = "Male";

  if (gender) {
    gen = "Male";
  }
  else {
    gen = "Female";
  }

  console.log(`Welcome, ${name}! Your income is ${income}. You are a true ${gen}.`);
}

printname("Aaditya Mittal", 50000000, true);


//1st way of using it
//Calls a function after the specified amount of time has lapsed
const customTimeOut = setTimeout(() => {
  printname("Aaditya Kumar Mittal", 500000000000, true);
}, 2000);

console.log(customTimeOut); //prints the id of the set Time Out function


btn.addEventListener("click", () => {
  //We need to pass the id of the setTimeOut function to the clearTimeOut function that we neet to stop
  clearTimeout(customTimeOut);
});

//2d way of using it
setTimeout(printname, 5000, "Aaditya Mittal", 1000000, true);