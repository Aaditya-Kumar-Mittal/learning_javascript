const input = document.getElementById("myInput");
const button = document.getElementById("myBtn");
const deleteBtn = document.getElementById("delete");

const btnClick = () => {
  // alert(input.value);
  localStorage.setItem("key1", input.value);
  localStorage.setItem("key2", input.value);
  localStorage.setItem("key3", input.value);
  localStorage.setItem("key4", { name: "Aaditya", lastname: "Mittal" })
  localStorage.setItem("key5", JSON.stringify({ name: "Aaditya", lastname: "Mittal" }));
}


button.addEventListener("click", btnClick);

deleteBtn.addEventListener("click", () => {

  console.log(localStorage.length); // prints length of the localStorage array
  console.log(localStorage.key(1)); // gets the specified indexed item
  console.log(localStorage.removeItem("key2")); //reomves specified item
  // localStorage.clear();
})

if (localStorage.getItem("key5")) {
  console.log(localStorage.getItem("key5"));
  alert(localStorage.getItem("key5"));
}


//local storage exists for is same for all the tabs and brower windows

//It takes times to call data from the API from the full server. So local storage is used to store the data in the local storage from the API at once to avoid recalling it again and again

//localStorage size is 5-10 Mbs
//sessionStorage size is 5Mbs