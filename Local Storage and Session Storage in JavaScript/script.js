const input = document.getElementById("myInput");
const button = document.getElementById("myBtn");
const deleteBtn = document.getElementById("delete");

const btnClick = () => {
  // alert(input.value);

  sessionStorage.setItem("key1", input.value);
  sessionStorage.setItem("key2", input.value);
  sessionStorage.setItem("key3", input.value);
}


button.addEventListener("click", btnClick);


deleteBtn.addEventListener("click", () => {

  // console.log(sessionStorage.length); // prints length of the sessionStorage array
  // console.log(sessionStorage.key(1)); // gets the specified indexed item
  // console.log(sessionStorage.removeItem("key2")); //reomves specified item

  sessionStorage.clear();


})

if (sessionStorage.getItem("key1")) {
  alert(sessionStorage.getItem("key1"));
}


//Session storage exists for current session only and gets cleared if a new tab is opened or the tab is closed.