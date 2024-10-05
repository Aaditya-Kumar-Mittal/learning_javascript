const gameList = [];

const fetchData = (displayResult) => {
  setTimeout((displayResult) => {
    gameList.push(
      {
        name: "game 1",
        id: "abcedfg"
      }, {
      name: "game 2",
      id: "abcedfh"
    }, {
      name: "game 3",
      id: "abcedfi"
    }
    )

    displayResult();

    console.log("Game List after fetch displayResult has been called:", gameList);

  }, 4000, displayResult);
}



const displayResult = () => {
  setTimeout(() => {
    const ul = document.querySelector("ul");

    for (let index = 0; index < gameList.length; index++) {
      const li = document.createElement("li");

      const element = gameList[index];

      li.innerText = `Name: ${element.name} Id: ${element.id}`;

      ul.append(li)
    }

    console.log("Display Log is called!");


  }, 1000); // Reduced time to ensure it displays shortly after fetchData
}

fetchData(displayResult);