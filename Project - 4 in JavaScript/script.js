const title = document.getElementById("title");
const desc = document.getElementById("description");
const form = document.querySelector("form");
const container = document.querySelector(".container");


const tasks = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTasks();
  tasks.push(
    {
      title: title.value,
      desc: desc.value
    });

  localStorage.setItem("currentTasks", JSON.stringify(tasks));
  showAllTasks();
})


function showAllTasks() {
  tasks.forEach(
    (item, index) => {
      const div = document.createElement("div");

      div.setAttribute("class", "task");

      const h5 = document.createElement("h5");
      h5.innerText = item.title;
      div.append(h5);

      const span = document.createElement("span");
      span.innerText = item.desc;
      div.append(span);

      const btn = document.createElement("button");
      btn.setAttribute("class", "deleteBtn");

      btn.addEventListener("click", () => {
        removeTasks();
        tasks.splice(index, 1);
        localStorage.setItem("currentTasks", JSON.stringify(tasks));
        showAllTasks();
      })

      btn.innerText = '🗑️';
      div.append(btn);

      container.append(div);
    })
}

function removeTasks() {
  tasks.forEach((value) => {
    const div = document.querySelector(".task");
    div.remove();
  })
}