const heading = document.getElementById("heading");
const box1 = document.getElementById("box1");
const myBtn = document.getElementById("myBtn");

box1.addEventListener("click", () => {
  // console.log("Clicked");
  box1.setAttribute("class", "classForDiv");
});

myBtn.addEventListener("mouseover", () => {
  myBtn.style.transform = "scale(1.1)";
});