const temperatureC = document.querySelector("#box1 #celsius");
const temperatureF = document.querySelector("#box1 #fahrenheit");
const city = document.querySelector("#box2 p");
const dayDate = document.querySelector("#box2 #dayDate");
const dayTime = document.querySelector("#box2 #time");
const emoji = document.querySelector("#box3 img");
const condition = document.querySelector("#box3 span");
const form = document.querySelector("form");
const locationInput = document.querySelector("#location");

let target = "New Delhi";

function getDayString(day) {
  switch (day) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 0:
      return "Sunday";
      break;
    default:
      break;
  }
}

function getMonthString(month) {
  switch (month) {
    case 1:
      return "January";
      break;
    case 2:
      return "February";
      break;
    case 3:
      return "March";
      break;
    case 4:
      return "April";
      break;
    case 5:
      return "May";
      break;
    case 6:
      return "June";
      break;
    case 7:
      return "July";
      break;
    case 8:
      return "August";
      break;
    case 9:
      return "September";
      break;
    case 10:
      return "October";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "December";
      break;
    default:
      break;
  }
}

function updateDOM(tempC, tempF, cityName, icon, weatherCondition, locationTime) {

  temperatureC.innerText = `${tempC}`;
  temperatureF.innerText = `${tempF}`;

  const [date, time] = locationTime.split(" ");

  let myDate = new Date(date);
  let numDate = String(myDate.getDate()).padStart(2, '0');
  let monthString = getMonthString(myDate.getMonth() + 1);
  let year = myDate.getFullYear();
  let dayOfWeek = getDayString(myDate.getDay());

  dayDate.innerText = `${dayOfWeek}, ${numDate}-${monthString}-${year}`;
  dayTime.innerText = `${time} `;
  city.innerText = `${cityName}`;
  emoji.src = icon;
  condition.innerText = `${weatherCondition}`;

}

const fetchData = async () => {

  let url = `https://api.weatherapi.com/v1/current.json?key=e79b2f816e9d443583f233946240810&q=${target}`;

  const response = await fetch(url);

  const data = await response.json();

  console.log(data);

  const {

    current: {
      temp_c,
      temp_f,
      condition: {
        text, icon
      }
    },

    location:
    {
      name,
      localtime
    }

  } = data;

  updateDOM(temp_c, temp_f, name, icon, text, localtime);

}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  // Trim the input value to remove any extra spaces
  target = locationInput.value.trim() === "" ? "new delhi" : locationInput.value.trim();
  
  fetchData();
});