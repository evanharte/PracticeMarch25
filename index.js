class User {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
}

function makeObj() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const name = nameInput.value;
  const age = ageInput.value;

  return new User(name, age);
}

function displayObj(user) {
  const output = document.getElementById("output");
  output.innerHTML = `Name: ${user.name}<br>Age: ${user.age}`;
}

function displayObjects(user) {
  const displayDiv = document.getElementById("display-div");
  const userDiv = document.createElement("p");
  userDiv.innerHTML = `Name: ${user.name}<br>Age: ${user.age}`;
  displayDiv.appendChild(userDiv);
}

const makeButton = document.getElementById("make");
makeButton.addEventListener("click", () => {
  makeObj();
});

// const displayButton = document.getElementById("display");
// displayButton.addEventListener("click", () => {
//   const user = makeObj();
//   displayObj(user);
// });

const displayButton = document.getElementById("display");
const displayDiv = document.getElementById("display-div");
displayButton.addEventListener("click", () => {
  const user = makeObj();
  displayObjects(user);
});
