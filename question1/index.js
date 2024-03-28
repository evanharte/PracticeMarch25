const array = [];

///////////////////////////////////////////////////////////////////
// OBJECT CONSTRUCTOR FUNCTION
class User {
  constructor(n, a) {
    this.name = n;
    this.age = a;
  }
}

///////////////////////////////////////////////////////////////////
// MakeObj() & DisplayObjects() FUNCTIONS

function makeObj() {
  const nameInput = document.getElementById("name");
  const ageInput = document.getElementById("age");
  const name = nameInput.value;
  const age = ageInput.value;

  const user = new User(name, age);
  array.push(user);
  console.log(array);
}

function displayObj(array) {
  const displayDiv = document.getElementById("display-div");
  displayDiv.innerHTML = "";
  array.forEach((user) => {
    const userP = document.createElement("p");
    userP.innerHTML = `Name: ${user.name}<br>Age: ${user.age}`;
    displayDiv.appendChild(userP);
  });
}

///////////////////////////////////////////////////////////////////
// EVENT LISTENERS
const makeButton = document.getElementById("make");
makeButton.addEventListener("click", () => {
  makeObj();
});

const displayButton = document.getElementById("display");
const displayDiv = document.getElementById("display-div");
displayButton.addEventListener("click", () => {
  displayObj(array);
});
