const api_url = 'https://catfact.ninja/fact';


console.log("Start");

const fetchData = async () => {

  console.log("F1");


  const response = await fetch(api_url);

  console.log("F2");

  const data = await response.json();

  console.log("F3");

  // Assuming the API returns an array of quotes
  console.log(data); // Check what data is returned


};

fetchData();

console.log("End1");
console.log("End2");
console.log("End3");
console.log("End4");
console.log("End5");
