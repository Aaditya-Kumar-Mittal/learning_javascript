const input = document.getElementById("numberOfWords");

const container = document.querySelector(".container");


let numOfWords;

const generateWords = (n) => {

  let text = "";

  const letters = " ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ";

  for (let index = 0; index < n; index++) {

    const randomIndex = (Math.random() * (letters.length - 1)).toFixed(0);

    text += letters[randomIndex];
  }

  return text;
}

// (Math.random() * 10).toFixed(0);

const generatePara = () => {

  numOfWords = Number(input.value);

  const para = document.createElement("p");

  let paraContent = "";

  for (let index = 0; index < numOfWords; index++) {

    const randomNumber = (Math.random() * 15).toFixed(0);

    paraContent += generateWords(randomNumber);

    paraContent += " ";
  }

  console.log(paraContent);

  para.innerText = paraContent;

  para.setAttribute("class", "paras");

  container.append(para);
}