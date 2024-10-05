const api_url = 'https://animechan.io/api/v1/quotes/random';

console.log("Starting of the file");


const fetchData = () => {
  //fetch is a function of Promise 
  console.log("Inside the fetchData Function");

  //fetch function is asynchronous
  fetch(api_url).then((response) => {

    // console.log(data);
    console.log(response);

    return response.json();

  }).then((data) => {

    console.log(data);

  }).catch((error) => {
    console.log(error);
  })
};

console.log("Caling the fetch data function");

fetchData();

console.log("End of the file");

//Get -> to read some data
//Push -> To create some new data
//Put -> To update some data
//Delete -> To delete some data 