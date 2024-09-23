
const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackgorundColor = () => {

  switch (zodiac.value) {
    case "aries":
      body.style.backgroundColor = "#fc0303";
      break;
    case "taurus":
      body.style.backgroundColor = "#008000";
      break;
    case "cancer":
      body.style.backgroundColor = "#C0C0C0";
      break;
    case "capricorn":
      body.style.backgroundColor = "#8B4513";
      break;
    case "leo":
      body.style.backgroundColor = "#FFD700";
      break;
    case "virgo":
      body.style.backgroundColor = "#000080";
      break;
    case "sagittarius":
      body.style.backgroundColor = "#800080";
      break;
    case "gemini":
      body.style.backgroundColor = "#FFFF00";
      break;
    case "libra":
      body.style.backgroundColor = "#FFC0CB";
      break;
    case "scorpio":
      body.style.backgroundColor = "#800000";
      break;
    case "pisces":
      body.style.backgroundColor = "#2E8B57";
      break;
    case "aquaris":
      body.style.backgroundColor = "#40E0D0";
      break;
    default:
      body.style.backgroundColor = "#ffffff";
      break;
  }
}

