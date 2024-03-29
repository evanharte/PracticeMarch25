// use fetch API to get data from this link: https://jsonplaceholder.typicode.com/todos

const fetchAPI = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  // .then((json) => console.log(json))
  .catch((error) => console.error("Error:", error));

// display the data in index.html browser
const displayData = async () => {
  const data = await fetchAPI;
  const dataContainer = document.getElementById("data-container");
  data.forEach((item) => {
    const dataItem = document.createElement("div");
    dataItem.innerHTML = `
        <h4>UserID: ${item.userId}</h4>
        <h6>ID: ${item.id}</h6>
        <h6>Title: ${item.title}</h6>
        <h6>Completed: ${item.completed}</h6>
        <hr>
    `;
    dataContainer.appendChild(dataItem);
  });
};

displayData();
