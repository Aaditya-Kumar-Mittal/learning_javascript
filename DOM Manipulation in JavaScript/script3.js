let className = document.getElementsByClassName("heading-1")

console.log(className);

let idName = document.getElementById("email")

console.log(idName);

let byName = document.getElementsByName("email")

console.log(byName);

let all = document.querySelectorAll("h1")

console.log(all);

let tagName = document.getElementsByTagName("input")

console.log(tagName);

let getSpan = document.getElementsByTagName("span")

console.log(getSpan[0]);

getSpan[0].style.color = "red"

getSpan[0].style.fontWeight = "bold"

let createH2 = document.createElement("h2");

document.body.prepend(createH2);

let myText = document.createTextNode("Text node created using JavaScript")

createH2.append(myText);