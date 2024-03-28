function showJSON() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const ul = document.getElementById("list");
        const li = document.createElement("li");
        const li2 = document.createElement("li");
        li.innerHTML = `Name: ${data.name}<br>`;
        li2.innerHTML = `Company: ${data.company}`;
        ul.appendChild(li);
        ul.appendChild(li2);
      } else {
        console.error("Failed to load JSON file");
      }
    }
  };
  xhr.send();
}

document.getElementById("showJson").addEventListener("click", showJSON);
