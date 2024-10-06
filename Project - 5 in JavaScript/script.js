const seconds = 1000;
const minutes = 60 * seconds;
const hours = 60 * minutes;
const day = 24 * hours;

const nS = document.querySelector(".nSeconds");
const nM = document.querySelector(".nMinutes");
const nH = document.querySelector(".nHours");
const nD = document.querySelector(".nDays");
const container = document.querySelector(".container");

const timerFunction = () => {
  let now = new Date();

  let dd = String(now.getDate()).padStart(2, '0');
  let mm = String(now.getMonth() + 1).padStart(2, '0'); // Adjusted to get the correct month (1-based)
  let yyyy = now.getFullYear();

  let enterDate = prompt("Enter a day (DD): ").padStart(2, '0');
  let enterMonth = prompt("Enter a month (MM): ").padStart(2, '0');

  // Validate date and month input
  if (!enterDate || !enterMonth || isNaN(enterDate) || isNaN(enterMonth) || enterDate > 31 || enterMonth > 12) {
    alert("Invalid date or month entered. Please try again.");
    return;
  }

  now = `${yyyy}-${mm}-${dd}`;

  // console.log(now);

  // Use a proper format for target date (ISO format is YYYY-MM-DD)
  let targetDate = `${yyyy}-${enterMonth}-${enterDate}`;

  if (now > targetDate) {
    targetDate = `${yyyy + 1}-${enterMonth}-${enterDate}`;
  }

  // Check if the target date is valid
  if (isNaN(new Date(targetDate).getTime())) {
    alert("Invalid date format. Please try again.");
    return;
  }



  // Start the interval only if the date is valid
  setInterval(() => {
    const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();
    const diffMilli = timer - today;

    const leftDay = Math.floor(diffMilli / day);
    const leftHours = Math.floor((diffMilli % day) / hours);
    const leftMinutes = Math.floor((diffMilli % hours) / minutes);
    const leftSeconds = Math.floor((diffMilli % minutes) / seconds);

    // console.log(`No of days : ${Math.floor(diffMilli / day)}`);

    // console.log(`No of hours : ${Math.floor((diffMilli % day) / hours)}`);

    // console.log(`No of minutes : ${Math.floor((diffMilli % hours) / minutes)}`);

    // console.log(`No of seconds : ${Math.floor((diffMilli % minutes) / seconds)}`);

    // console.log(`Days ${leftDay} : Hours : ${leftHours} : Minutes : ${leftMinutes} : Seconds : ${leftSeconds}`);

    nD.innerText = leftDay;
    nH.innerText = leftHours;
    nM.innerText = leftMinutes;
    nS.innerText = leftSeconds;

    if (diffMilli < 0) {
      container.style.display = "none";
    }

  }, 1000);

};

timerFunction();